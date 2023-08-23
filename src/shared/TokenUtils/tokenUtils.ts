import axios from 'axios';

/**
 *
 * 토큰 저장해버렷
 */
export const saveAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const saveRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
};

/**
 *
 * 토큰 가져와버렷
 */
export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refreshToken');
};

/**
 *
 * 로그아웃 시켜버렷
 */
export const handleLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

/**
 *
 * 토큰 만료되었는지 확인해버렷
 */
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

/**
 *
 * 토큰의 만료 시간, 분으로 반환해버렷
 */
export const getRemainingMinutesForAccessToken = (): number | null => {
  const token = getAccessToken();
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const remainingTime = payload.exp * 1000 - Date.now();
    return Math.round(remainingTime / 1000 / 60);
  } catch (e) {
    return null;
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

export const checkTokenExpiration = async (): Promise<void> => {
  if (isAccessTokenExpired()) {
    console.log('젠장.. Access token이 만료되어버렸다..');

    const refreshToken = getRefreshToken();
    if (!refreshToken || isRefreshTokenExpired()) {
      handleLogout();
      console.log('어이어이.. 로그인 상태가 아니라구!');
      return;
    }

    const newAccessToken = await requestNewAccessToken(refreshToken);
    if (newAccessToken) {
      console.log('새로운 access token을 받아왔다...');
      saveAccessToken(newAccessToken);
    } else {
      console.log('새 access token을 얻는 데 실패했다... 다시 로그인해라.');
      handleLogout();
    }
  } else {
    const remainingMinutesForAccessToken = getRemainingMinutesForAccessToken();
    const remainingMinutesForRefreshToken =
      getRemainingMinutesForRefreshToken();

    if (remainingMinutesForAccessToken !== null) {
      console.log(
        `access token 만료까지 남은 시간: ${remainingMinutesForAccessToken}분`,
      );
    }

    if (remainingMinutesForRefreshToken !== null) {
      console.log(
        `refresh token 만료까지 남은 시간: ${remainingMinutesForRefreshToken}분`,
      );
    }
  }
};

/**
 *
 * refresh token 사용하여 새로운 access token 요청해버렷
 */
export const requestNewAccessToken = async (
  refreshToken: string,
): Promise<string | null> => {
  console.log('access token.. 새롭게 요청해버렸다..');
  try {
    const response = await axios.post('/auth/login', {
      refreshToken,
    });
    if (response.data && response.data.access) {
      return response.data.access;
    }
    return null;
  } catch (e) {
    console.error('Error while requesting new access token', e);
    return null;
  }
};
