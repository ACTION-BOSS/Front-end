import { FC } from 'react';
import { ReactQueryProvider, RecoilProvider } from './providers';
import { RouterProvider } from './router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './styles';
import { useIntervalTokenExpirationCheck } from './shared';

export const App: FC = () => {
  useIntervalTokenExpirationCheck();

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
