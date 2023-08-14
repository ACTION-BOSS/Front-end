import { FC } from 'react';
import { ModalProvider, ReactQueryProvider, RecoilProvider } from './providers';
import { RouterProvider } from './router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './styles';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <RecoilProvider>
        <ReactQueryProvider>
          <ThemeProvider theme={Theme}>
            <ModalProvider>
              <RouterProvider />
            </ModalProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </RecoilProvider>
    </>
  );
};
