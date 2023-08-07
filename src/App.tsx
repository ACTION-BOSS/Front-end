import { FC } from 'react';
import { ReactQueryProvider, RecoilProvider } from './providers';
import { RouterProvider } from './router';
import { GlobalStyle } from './styles';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <RecoilProvider>
        <ReactQueryProvider>
          <RouterProvider />
        </ReactQueryProvider>
      </RecoilProvider>
    </>
  );
};
