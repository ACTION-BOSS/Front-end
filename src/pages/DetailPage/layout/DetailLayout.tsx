import { FC, ReactNode } from 'react';
type DetailLayoutProps = {
  children: ReactNode;
};

export const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
