import styled from 'styled-components';
import { FlagIcon } from '../../../../assets';
import { Theme, media } from '../../../../styles';

export const StViewWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-right: 15vw;

  ${media.tablet`
  width: 95%;
  padding-right: 0px;
`}
`;

export const StTitleWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 13px 20px;
  margin-bottom: 12px;
  gap: 10px;
`;

export const StTitleText = styled.div`
display: flex;
color: ${Theme.colors.black}
text-align: center;

font-size: ${Theme.fontSizes.h2};
font-style: normal;
font-weight: ${Theme.fontWeights.h2};
line-height: normal;
`;

export const StContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${Theme.colors.gray2};
  border-bottom: 1px solid ${Theme.colors.gray2};
  gap: 60px;
  padding: 80px 20px 80px 20px;
`;

export const StyledFlagIcon = styled(FlagIcon)`
  width: 25px;
`;

export const StContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 830px;
  width: 100%;

  ${media.tablet`
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  `}
`;

export const StColumnContents = styled(StContent)`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
`;

export const StSubTitleWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 180px;
  color: ${Theme.colors.gray6};

  font-size: ${Theme.fontSizes.h2};
  font-style: normal;
  font-weight: ${Theme.fontWeights.h2};
  line-height: normal;

  ${media.tablet`
    width: 120px;
  `}
`;

export const StInputBox = styled.input<{ $isCorrect?: boolean | null }>`
  display: flex;
  max-width: 500px;
  width: 100%;
  height: 45px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  outline: none;

  border: ${({ $isCorrect }) => {
    if ($isCorrect === false) return `1px solid ${Theme.colors.pink}`;
    if ($isCorrect) return `1px solid ${Theme.colors.blue}`;
    return 'none';
  }};
  border-radius: 8px;
  background: ${Theme.colors.white};

  color: ${Theme.colors.gray7};
  font-family: Pretendard;
  font-size: ${Theme.fontSizes.body2};
  font-style: normal;
  font-weight: ${Theme.fontWeights.body2};
  line-height: 32px;

  &::placeholder {
    color: ${Theme.colors.gray4};
    font-size: ${Theme.fontSizes.label1};
    font-weight: ${Theme.fontWeights.label1};
    line-height: 18px;
  }

  ${media.tablet`
  max-width: none;
  `}
`;

export const StVerificationCodeInput = styled(StInputBox)<{
  $isVerificated: boolean | null;
}>`
  border: ${(props) => {
    return props.$isVerificated === true
      ? `1px solid ${Theme.colors.blue}`
      : props.$isVerificated === false
      ? `1px solid ${Theme.colors.pink}`
      : 'none';
  }};
`;

export const StEmailIdInput = styled(StInputBox)<{
  $isError: boolean | null;
}>`
  width: 100%;
  max-width: 180px;
  min-width: 150px;
  border: ${(props) =>
    props.$isError ? `1px solid ${Theme.colors.pink}` : 'none'};

  ${media.tablet`
min-width: 0;
  `}
`;

export const StWarningText = styled.p<{ $isCorrect: boolean | null }>`
  position: absolute;
  bottom: -18px;
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
  color: ${({ $isCorrect }) =>
    $isCorrect === false
      ? Theme.colors.pink
      : $isCorrect === true
      ? Theme.colors.blue
      : Theme.colors.gray7};

  ${media.tablet`
    bottom : -24px;
  `}
`;

export const StButton = styled.button<{ $isCorrect?: boolean | null }>`
  display: flex;
  min-width: 120px;
  padding: 16px 16px;
  justify-content: center;
  align-items: center;
  cursor: ${({ $isCorrect }) => ($isCorrect ? 'pointer' : 'default')};

  border: none;
  border-radius: 12px;
  background: ${({ $isCorrect }) => {
    if ($isCorrect) {
      return `${Theme.colors.blue}`;
    } else {
      return `${Theme.colors.gray2}`;
    }
  }};

  box-shadow: 0px 0px 5px 0px rgba(41, 47, 61, 0.25);

  color: ${({ $isCorrect }) => {
    if ($isCorrect) {
      return `${Theme.colors.white}`;
    } else {
      return `${Theme.colors.gray1}`;
    }
  }};

  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  ${media.tablet`
    height: 45px;
  `}

  ${media.mobile`
  position: absolute;
  bottom: 120%;
  right: 0;

  min-width: 75px;
  height: 28px;
  padding: 6px 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px rgba(41, 47, 61, 0.25);

/* M B1 */
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 16px; 
  `}
`;

export const StForm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  ${media.tablet`
    height: 45px;
  `}
`;

export const StEmailForm = styled(StForm)`
  width: auto;
  align-items: center;
  gap: 14px;
`;

export const StGrayInput = styled.input<{
  $isError: boolean | null;
}>`
  display: flex;
  width: 180px;
  height: 45px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${Theme.colors.white};
  color: ${Theme.colors.gray7};

  font-size: ${Theme.fontSizes.body2};
  font-weight: ${Theme.fontWeights.body2};

  border: ${(props) =>
    props.$isError ? `1px solid ${Theme.colors.pink}` : 'none'};
  outline: none;

  &::placeholder {
    color: ${Theme.colors.gray4};
    font-size: ${Theme.fontSizes.label1};
    font-weight: 100;
  }
`;

export const StSelectBoxWrapper = styled.div`
  width: 100%;
  max-width: 180px;
  min-width: 150px;

  ${media.tablet`
  min-width: 120px;
`}
`;

export const StColumnDiv = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const StLabel1Text = styled.p<{
  $isCorrect?: boolean | null;
}>`
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};

  color: ${({ $isCorrect }) =>
    $isCorrect === false
      ? Theme.colors.pink
      : $isCorrect === true
      ? Theme.colors.blue
      : Theme.colors.gray7};
`;

export const StLabel3Text = styled.p`
  font-size: ${Theme.fontSizes.label3};
  font-weight: ${Theme.fontWeights.label3};

  text-decoration-line: underline;
  color: ${Theme.colors.gray7};
  cursor: pointer;
`;

export const StLabelTextWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 8px;

  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 4px;
`;

export const StFlexRowDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const StRelativeDiv = styled(StFlexRowDiv)`
  display: flex;
  position: relative;
  align-items: center;
`;

export const StVerificationButtonWrapper = styled.div`
  position: absolute;
  right: 12px;
`;

export const StFlexEndDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 18px;

  & > :first-child {
    display: flex;
    width: 117px;
    height: 50px;

    ${media.mobile`
  height: 26px;
  width: auto;
  padding-right: 20px;
  `}
  }

  p {
    text-decoration: underline;
    cursor: pointer;
    color: ${Theme.colors.gray3};
    font-size: ${Theme.fontSizes.label3};
    font-weight: ${Theme.fontWeights.label3};
  }
`;
