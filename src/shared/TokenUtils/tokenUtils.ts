export const saveAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const getAccessToken = () => {
  return localStorage?.getItem('accessToken');
};

export const handleLogout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  window.location.reload();
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

export const checkTokenExpiration = (): void => {
  if (isAccessTokenExpired()) {
    // Access Token Expired
    console.log('엑세스 토큰이 만료되어 삭제되었거나 로그인 상태가 아닙니다.');
  } else {
    const remainingMinutesForAccessToken = getRemainingMinutesForAccessToken(
      getAccessToken(),
    );
    const remainingMinutesForRefreshToken =
      getRemainingMinutesForRefreshToken();

    if (remainingMinutesForAccessToken !== null) {
      console.log(
        `Access 토큰 만료까지 남은 시간: ${remainingMinutesForAccessToken}분`,
      );
    }

    if (remainingMinutesForRefreshToken !== null) {
      console.log(
        `Refresh 토큰 만료까지 남은 시간: ${remainingMinutesForRefreshToken}분`,
      );
    }
  }
};

/**
 *
 * refresh token 사용하여 새로운 access token 요청
 */

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
