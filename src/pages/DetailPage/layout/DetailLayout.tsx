import { FC, ReactNode } from 'react';
import { Header } from '../../../shared';
import {
  StBg,
  StChildrenWrapper,
  StGrayBg,
  StLayoutWrapper,
  StSkyline,
} from './LayoutStyle';

type DetailLayoutProps = {
  children: ReactNode;
};

export const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return (
    <StLayoutWrapper>
      <Header />
      <StChildrenWrapper>
        <div>{children}</div>
      </StChildrenWrapper>

      <StBg>
        <StSkyline></StSkyline>
        <StGrayBg></StGrayBg>
      </StBg>
    </StLayoutWrapper>
  );
};
