import { FC, useEffect } from 'react';

type OAuthPageProps = {};

export const OAuthPage: FC<OAuthPageProps> = ({}) => {
  const redirectURL = `${process.env.REACT_APP_REDIRECT_URI}`;
  useEffect(() => {
    window.location.href = redirectURL;
  }, []);

  return <div></div>;
};
