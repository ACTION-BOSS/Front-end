import { FC, ReactNode } from 'react';
import {
  StModalWrapper,
  StHeader,
  StLogoWrapper,
  SampleLogo,
  StButtonWrapper,
  StViewWrapper,
} from './LayoutStyle';
import styled from 'styled-components';
type SignUpLayoutProps = {
  children: ReactNode;
};

export const SignUpLayout: FC<SignUpLayoutProps> = ({ children }) => {
  return (
    <StModalWrapper>
      <StHeader>
        <div style={{ aspectRatio: 1, backgroundColor: 'gray', width: 24 }} />

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <StColumnDiv>
            <div>
              <StRoundStep />
            </div>
            <StLetterStep>1단계</StLetterStep>
          </StColumnDiv>

          <StColumnDiv>
            <div>
              <StRoundStep />
            </div>
            <StLetterStep>2단계</StLetterStep>
          </StColumnDiv>

          <StColumnDiv>
            <div>
              <StRoundStep />
            </div>
            <StLetterStep>3단계</StLetterStep>
          </StColumnDiv>
        </div>

        <div style={{ aspectRatio: 1, backgroundColor: 'gray', width: 24 }} />
      </StHeader>
      <StLogoWrapper>
        <SampleLogo />
      </StLogoWrapper>
      <StViewWrapper>{children}</StViewWrapper>
      <StButtonWrapper></StButtonWrapper>
    </StModalWrapper>
  );
};

export const StColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  gap: 4px;
`;

export const StRoundStep = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 999px;

  background-color: gray;
`;

export const StLetterStep = styled.p`
  font-size: 10px;
`;

{
  /* <div style={{ width: 20.43, height: 0, border: '0.50px #454554 solid' }}></div>; */
}
