import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';

type IReactQueryProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const ReactQueryProvider: FC<IReactQueryProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
