import { FC, useEffect } from 'react';
import { ReactQueryProvider, RecoilProvider } from './providers';
import { RouterProvider } from './router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './styles';
import { checkTokenExpiration } from './shared';

export const App: FC = () => {
  useEffect(() => {
    checkTokenExpiration();
  }, []);

  return (
    <>
      <GlobalStyle />
      <RecoilProvider>
        <ReactQueryProvider>
          <ThemeProvider theme={Theme}>
            <RouterProvider />
          </ThemeProvider>
        </ReactQueryProvider>
      </RecoilProvider>
    </>
  );
};
