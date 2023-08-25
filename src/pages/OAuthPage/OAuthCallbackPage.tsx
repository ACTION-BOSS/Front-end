import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
type OAuthCallbackPageProps = {};

export const OAuthCallbackPage: FC<OAuthCallbackPageProps> = ({}) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  useEffect(() => {
    if (code) {
      console.log('Code:', code);
      // axios.post('/api/oauth/kakao', { code });
    }
  }, [code]);

  return <div>callback</div>;
};
