export const saveAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const handleLogout = () => {
  localStorage.removeItem('accessToken');
  // localStorage.removeItem('refreshToken');
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

export const checkTokenExpiration = (): void => {
  if (isAccessTokenExpired()) {
    console.log('토큰이 만료되어 삭제되었거나 로그인 상태가 아닙니다.');
    handleLogout();
  } else {
    const token = getAccessToken();
    const payload = JSON.parse(atob(token!.split('.')[1]));
    const remainingTime = payload.exp * 1000 - Date.now();
    const remainingMinutes = Math.round(remainingTime / 1000 / 60);
    console.log(`토큰 만료까지 남은 시간: ${remainingMinutes}분`);
  }
};

/**
 *
 * refresh token 사용하여 새로운 access token 요청
 */

// export const saveRefreshToken = (refreshToken: string) => {
//   localStorage.setItem('refreshToken', refreshToken);
// };

// export const getRefreshToken = (): string | null => {
//   return localStorage.getItem('refreshToken');
// };

// export const isRefreshTokenExpired = (): boolean => {
//   const refreshToken = getRefreshToken();
//   if (!refreshToken) return true;

//   try {
//     const payload = JSON.parse(atob(refreshToken.split('.')[1]));
//     return Date.now() >= payload.exp * 1000;
//   } catch (e) {
//     return true;
//   }
// };

// export const getRemainingMinutesForRefreshToken = (): number | null => {
//   const token = getRefreshToken();
//   if (!token) return null;

//   try {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     const remainingTime = payload.exp * 1000 - Date.now();
//     return Math.round(remainingTime / 1000 / 60);
//   } catch (e) {
//     return null;
//   }
// };

// export const requestNewAccessToken = async (
//   refreshToken: string,
// ): Promise<string | null> => {
//   console.log('access token.. 새롭게 요청해버렸다..');
//   try {
//     const response = await axios.post('/auth/login', {
//       refreshToken,
//     });
//     if (response.data && response.data.access) {
//       return response.data.access;
//     }
//     return null;
//   } catch (e) {
//     console.error('Error while requesting new access token', e);
//     return null;
//   }
// };
