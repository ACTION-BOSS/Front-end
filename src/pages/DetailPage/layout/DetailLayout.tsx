import { FC, ReactNode } from 'react';

import {
  StBg,
  StBottomButtonWrapper,
  StChildrenWrapper,
  StGrayBg,
  StLayoutWrapper,
  StSkyline,
} from './LayoutStyle';
import { CompletedButton } from '../components';
import { Header } from '../../../shared';

type DetailLayoutProps = {
  children: ReactNode;
};

export const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return (
    <StLayoutWrapper>
      <Header />
      <StChildrenWrapper>
        <div>{children}</div>
        <StBottomButtonWrapper>
          <CompletedButton />
        </StBottomButtonWrapper>
      </StChildrenWrapper>

      <StBg>
        <StSkyline></StSkyline>
        <StGrayBg></StGrayBg>
      </StBg>
    </StLayoutWrapper>
  );
};
