import { FC, ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { $tokenState, $tokenExpiryState } from './state';
type LoginHandlerProps = { children: ReactNode };

export const LoginHandler: FC<LoginHandlerProps> = ({ children }) => {
  const [tokenState, setTokenState] = useRecoilState($tokenState);
  const [expiryDate, setTokenExpiry] = useRecoilState($tokenExpiryState);

  useEffect(() => {
    if (tokenState && expiryDate) {
      // 1분마다 토큰의 만료 시간 출력
      const intervalId = setInterval(() => {
        const currentTimeLeft = expiryDate.getTime() - new Date().getTime();
        console.log(
          `남은 토큰 시간: ${Math.round(currentTimeLeft / 60000)} 분`,
        );
      }, 60000);

      const timeoutId = setTimeout(() => {
        alert('token fired!');
        setTokenState(null);
        setTokenExpiry(null);
        localStorage.removeItem('token');
      }, expiryDate.getTime() - new Date().getTime());

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }
  }, [tokenState, expiryDate, setTokenState, setTokenExpiry]);

  return <>{children}</>;
};
