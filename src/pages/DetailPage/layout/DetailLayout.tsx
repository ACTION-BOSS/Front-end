import { FC, ReactNode } from 'react';

import {
  StBg,
  StBottomButtonWrapper,
  StButtonsWrapper,
  StChildrenWrapper,
  StGrayBg,
  StLayoutWrapper,
  StSkyline,
} from './LayoutStyle';
import { CompletedButton } from '../components';
import { Button, Header } from '../../../shared';
import { Theme } from '../../../styles';

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
          <StButtonsWrapper>
            <Button
              label="삭제"
              $buttonTheme="emptyPink"
              size="mediumLong"
              fontSize={Theme.fontSizes.h2}
            />
            <Button
              label="수정"
              $buttonTheme="blue"
              size="mediumLong"
              fontSize={Theme.fontSizes.h2}
            />
          </StButtonsWrapper>
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
