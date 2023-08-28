import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { saveAccessToken } from '../../shared';
type OAuthCallbackPageProps = {};

export const OAuthCallbackPage: FC<OAuthCallbackPageProps> = ({}) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');
  const navigate = useNavigate();

  const getAccessTokenByCode = async (code: string) => {
    try {
      const response = await api.post(
        '/auth/kakao',
        {},
        {
          params: {
            code: code,
          },
        },
      );

      if (response.status === 200) {
        const accessToken = response.headers['authorization'].split(' ')[1];
        console.log('access_token: ', accessToken);
        accessToken && saveAccessToken(accessToken);

        if (accessToken) {
          const redirectURL = sessionStorage.getItem('previousURL');
          if (redirectURL) {
            navigate(new URL(redirectURL).pathname);
            sessionStorage.removeItem('previousURL');
          } else {
            navigate('/main');
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (code) {
      getAccessTokenByCode(code);
    }
  }, [code]);

  return <div></div>;
};
