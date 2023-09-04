import { ChangeEvent, FC } from 'react';

import {
  StWrapper,
  StColumnDiv,
  StUpperSpaceDiv,
  StUpperText,
  StInputsWrapper,
  StInputWrapper,
  StVerificationInput,
  StLabelTextWrapper,
  StLabel1Text,
  StLabelTextWrapper2,
} from '../style';

type PasswordVerificationViewProps = {
  passwordValue: string;
  passwordVerificationValue: string;
  onChangePasswordVerification: (...event: any[]) => void;
  handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVerified: boolean | null;
  isVerified: boolean | null;
  verificationInputErrorText: (
    isVerified: boolean | null,
  ) => '' | '비밀번호가 일치합니다' | '비밀번호가 서로 다릅니다';
};

export const PasswordVerificationView: FC<PasswordVerificationViewProps> = ({
  passwordValue,
  passwordVerificationValue,
  onChangePasswordVerification,
  handleChangePassword,
  isPasswordVerified,
  isVerified,
  verificationInputErrorText,
}) => {
  return (
    <StWrapper>
      <StColumnDiv>
        <StUpperSpaceDiv>
          <StUpperText>비밀번호 확인</StUpperText>
        </StUpperSpaceDiv>

        <StInputsWrapper>
          <StInputWrapper>
            <StVerificationInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={passwordValue}
              onChange={handleChangePassword}
              $isVerificated={isPasswordVerified}
            />
          </StInputWrapper>
          {isPasswordVerified !== null && (
            <StLabelTextWrapper2>
              <StLabel1Text $isCorrect={isPasswordVerified}>
                {isPasswordVerified
                  ? '사용가능한 비밀번호입니다'
                  : '영어 + 숫자로만 입력해주세요. (8~15자, 특수문자 불가)'}
              </StLabel1Text>
            </StLabelTextWrapper2>
          )}
          <StInputWrapper>
            <StVerificationInput
              placeholder="비밀번호를 확인해주세요"
              type="password"
              value={passwordVerificationValue}
              onChange={onChangePasswordVerification}
              $isVerificated={isVerified}
            />
          </StInputWrapper>
        </StInputsWrapper>
        {isVerified !== null && (
          <StLabelTextWrapper>
            <StLabel1Text $isCorrect={isVerified}>
              {verificationInputErrorText(isVerified)}
            </StLabel1Text>
          </StLabelTextWrapper>
        )}
      </StColumnDiv>
    </StWrapper>
  );
};
