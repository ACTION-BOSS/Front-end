import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';

type ReactQueryProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
