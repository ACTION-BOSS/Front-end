import { FC } from 'react';
import { ReactQueryProvider, RecoilProvider } from './providers';
import { RouterProvider } from './router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles';

export const App: FC = () => {
  return (
    <>
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
