import { createContext, FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export interface IRecoilContext {}

export const RecoilContext = createContext<IRecoilContext | null>(null);

type RecoilProviderProps = {
  children: ReactNode;
};

export const RecoilProvider: FC<RecoilProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
