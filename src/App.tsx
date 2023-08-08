import { FC } from 'react';
import { ReactQueryProvider, RecoilProvider } from './providers';
import { RouterProvider } from './router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles';
import { GlobalStyle } from './styles';

export const App: FC = () => {
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
