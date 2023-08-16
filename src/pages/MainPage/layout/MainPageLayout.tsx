import React, { ReactNode } from 'react';
import * as s from './style';

type MyComponentProps = {
  children: ReactNode;
};

export const MainPageLayout = ({ children }: MyComponentProps) => {
  return <s.MainContainer>{children}</s.MainContainer>;
};
