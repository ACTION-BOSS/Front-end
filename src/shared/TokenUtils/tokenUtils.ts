import { useEffect, useRef } from 'react';
import { api } from '../../api';
import axios from 'axios';

export const useIntervalTokenExpirationCheck = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    checkTokenExpiration();

    intervalRef.current = setInterval(
      () => {
        checkTokenExpiration();
      },
      5 * 60 * 1000, // 5분
    );

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
};

export const saveAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const getAccessToken = () => {
  return localStorage?.getItem('accessToken');
};

export const handleLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const isAccessTokenExpired = (): boolean => {
  const accessToken = getAccessToken();
  if (!accessToken) return true;

  try {
    const payload = JSON.parse(atob(accessToken.split('.')[1]));
    return Date.now() >= payload.exp * 1000;
  } catch (e) {
    return true;
  }
};

export const getRemainingMinutesForAccessToken = (
  token: string | null,
): number | null => {
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const remainingTime = payload.exp * 1000 - Date.now();
    return Math.round(remainingTime / 1000 / 60);
  } catch (e) {
    return null;
  }
};

export const checkTokenExpiration = async (): Promise<void> => {
  const EXPIRATION_THRESHOLD = 5;
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    handleLogout();
    return;
  }

  const remainingMinutesForAccessToken = getRemainingMinutesForAccessToken(
    getAccessToken(),
  );

  const remainingMinutesForRefreshToken = getRemainingMinutesForRefreshToken();

  if (
    remainingMinutesForAccessToken !== null &&
    remainingMinutesForAccessToken <= EXPIRATION_THRESHOLD
  ) {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URI}/api/auth/login/reissueToken`,
        {
          headers: { Refresh: `Bearer ${refreshToken}` },
        },
      );
      if (res.status === 201) {
        const newAccessToken = res.headers['access'].split(' ')[1];
        saveAccessToken(newAccessToken);
        api.defaults.headers['Access'] = `Bearer ${newAccessToken}`;
      } else {
        console.log('Access 토큰 갱신에 실패했습니다.');
      }
    } catch (err) {
      console.log('Access 토큰 갱신 중 오류가 발생했습니다.');
    }
  }

  if (
    remainingMinutesForRefreshToken !== null &&
    remainingMinutesForRefreshToken <= EXPIRATION_THRESHOLD
  ) {
    alert(
      '로그인 유효 시간이 얼마 남지 않았습니다. 로그아웃 후 재 로그인 해주세요.',
    );
  }
};

export const saveRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
};

export const getRefreshToken = (): string | null => {
  return localStorage?.getItem('refreshToken');
};

export const isRefreshTokenExpired = (): boolean => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return true;

  try {
    const payload = JSON.parse(atob(refreshToken.split('.')[1]));
    return Date.now() >= payload.exp * 1000;
  } catch (e) {
    return true;
  }
};

export const getRemainingMinutesForRefreshToken = (): number | null => {
  const token = getRefreshToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const remainingTime = payload.exp * 1000 - Date.now();
    return Math.round(remainingTime / 1000 / 60);
  } catch (e) {
    return null;
  }
};
