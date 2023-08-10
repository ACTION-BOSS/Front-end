import { FC, ReactNode } from 'react';
import {
  StModalWrapper,
  StHeader,
  StChildrenWrapper,
  StViewWrapper,
  StFooter,
} from './LayoutStyle';
import { ShowStep } from '../components';
import { EStep } from '../type';
import { Button } from '../../Button';
import styled from 'styled-components';
import { BACK, BLACK_X, LOGO_SERO } from '../../../assets';

type SignUpLayoutProps = {
  children: ReactNode;
};

export const SignUpLayout: FC<SignUpLayoutProps> = ({ children }) => {
  return (
    <StModalWrapper>
      <StHeader>
        <img src={BACK} />
        <ShowStep step={EStep.STEP1} />
        <img src={BLACK_X} />
      </StHeader>

      <StChildrenWrapper>
        <img src={LOGO_SERO} />
      </StChildrenWrapper>

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
