import { FC, useEffect } from 'react';

type OAuthPageProps = {};

export const OAuthPage: FC<OAuthPageProps> = ({}) => {
  const redirectURL =
    'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=b9ce02ae8a8604f3bfab9c035707c2c0&redirect_uri=http://localhost:3000/oauth/callback';
  useEffect(() => {
    window.location.href = redirectURL;
  }, []);

  return <div>s</div>;
};
