import { FC, ReactNode } from 'react';

import {
  StBg,
  StChildrenWrapper,
  StGrayBg,
  StLayoutWrapper,
  StSkyline,
} from './LayoutStyle';
import { Header } from '../../../shared';
import { FooterButtons } from '../views';

type DetailLayoutProps = {
  children: ReactNode;
};

export const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return (
    <StLayoutWrapper>
      <Header />
      <StChildrenWrapper>
        <div>{children}</div>
        <FooterButtons />
      </StChildrenWrapper>

      <StBg>
        <StSkyline></StSkyline>
        <StGrayBg></StGrayBg>
      </StBg>
    </StLayoutWrapper>
  );
};

export const DetailMobileLayout: FC<DetailLayoutProps> = ({ children }) => {
  return <div></div>;
};
