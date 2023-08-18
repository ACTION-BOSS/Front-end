export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const isTokenExpired = (): boolean => {
  const token = getToken();
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    // 현재 시간이 토큰의 만료 시간보다 크면 토큰은 만료된 것으로 간주합니다.
    return Date.now() >= payload.exp * 1000;
  } catch (e) {
    return true;
  }
};

export const handleLogout = () => {
  localStorage.removeItem('token');
};

export const checkTokenExpiration = (): void => {
  if (isTokenExpired()) {
    console.log('토큰이 만료되어 삭제되었거나 로그인 상태가 아닙니다.');
    handleLogout();
  } else {
    const token = getToken();
    const payload = JSON.parse(atob(token!.split('.')[1]));
    const remainingTime = payload.exp * 1000 - Date.now();
    const remainingMinutes = Math.round(remainingTime / 1000 / 60);
    console.log(`토큰 만료까지 남은 시간: ${remainingMinutes}분`);
  }
};
