import { useEffect, useRef } from 'react';
import { api } from '../../api';

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
  if (isAccessTokenExpired()) {
    console.log('엑세스 토큰이 만료되어 삭제되었거나 로그인 상태가 아닙니다.');

    if (!isRefreshTokenExpired()) {
      try {
        await api.get('/endpoint-for-tokencheck');
      } catch (error) {}
    }
  } else {
    const remainingMinutesForAccessToken = getRemainingMinutesForAccessToken(
      getAccessToken(),
    );
    if (remainingMinutesForAccessToken !== null) {
      console.log(
        `Access 토큰 만료까지 남은 시간: ${remainingMinutesForAccessToken}분`,
      );
    }
  }

  if (isRefreshTokenExpired()) {
    console.log('리프레쉬 토큰도 만료되었습니다. 로그아웃합니다.');
    handleLogout();
  } else {
    const remainingMinutesForRefreshToken =
      getRemainingMinutesForRefreshToken();
    if (remainingMinutesForRefreshToken !== null) {
      console.log(
        `Refresh 토큰 만료까지 남은 시간: ${remainingMinutesForRefreshToken}분`,
      );
    }
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
