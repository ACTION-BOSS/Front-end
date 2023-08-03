import { createContext, FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export interface IRecoilContext {}

export const RecoilContext = createContext<IRecoilContext | null>(null);

type IRecoilProviderProps = {
  children: ReactNode;
};

export const RecoilProvider: FC<IRecoilProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
