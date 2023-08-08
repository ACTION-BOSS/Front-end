import { FC, ReactNode } from 'react';
import {
  StModalWrapper,
  StHeader,
  StLogoWrapper,
  SampleLogo,
  StViewWrapper,
  StFooter,
} from './LayoutStyle';
import { ShowStep } from '../components';
import { EStep } from '../type';
import { Button } from '../../Button';
import styled from 'styled-components';

type SignUpLayoutProps = {
  children: ReactNode;
};

export const SignUpLayout: FC<SignUpLayoutProps> = ({ children }) => {
  return (
    <StModalWrapper>
      <StHeader>
        <div style={{ aspectRatio: 1, backgroundColor: 'gray', width: 24 }} />
        <ShowStep step={EStep.STEP1} />
        <div style={{ aspectRatio: 1, backgroundColor: 'gray', width: 24 }} />
      </StHeader>

      <StLogoWrapper>
        <SampleLogo />
      </StLogoWrapper>

      <StViewWrapper>{children}</StViewWrapper>

      <StFooter>
        <StButtonWrapper>
          <Button label="로그인" $buttonTheme="gray" size="large" $bold />
        </StButtonWrapper>
      </StFooter>
    </StModalWrapper>
  );
};

export const StButtonWrapper = styled.div`
  width: 312px;
`;
