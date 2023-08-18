import { FC, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  $isPasswordVerified,
  $isReadyStepThree,
  $isVerified,
} from '../../state';
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
  onChangePassword: (...event: any[]) => void;
  onChangePasswordVerification: (...event: any[]) => void;
};

export const PasswordVerificationView: FC<PasswordVerificationViewProps> = ({
  passwordValue,
  passwordVerificationValue,
  onChangePassword,
  onChangePasswordVerification,
}) => {
  const setIsReadyStepThree = useSetRecoilState($isReadyStepThree);

  const [isPasswordVerified, setIsPasswordVerified] =
    useRecoilState($isPasswordVerified);
  const [isVerified, setIsVerified] = useRecoilState($isVerified);

  const handleChangePassword = (event: any) => {
    onChangePassword(event);
  };

  const verificationInputErrorText = (isVerified: boolean | null) => {
    if (isPasswordVerified) {
      if (isVerified === null) return '';
      if (isVerified) {
        return '비밀번호가 일치합니다';
      } else {
        return '비밀번호가 서로 다릅니다';
      }
    } else {
      return '';
    }
  };

  useEffect(() => {
    if (isVerified !== null) {
      setIsReadyStepThree(isVerified);
    } else {
      setIsReadyStepThree(false);
    }
  }, [isVerified, isPasswordVerified]);

  useEffect(() => {
    const PASSWORD_VERIFICATION_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,15}$/;

    // 비밀번호 유효성 검사
    if (passwordValue.length === 0) {
      setIsPasswordVerified(null);
    } else {
      setIsPasswordVerified(PASSWORD_VERIFICATION_REGEX.test(passwordValue));
    }

    // 비밀번호 일치 검사
    if (passwordVerificationValue.length === 0) {
      setIsVerified(null);
    } else {
      if (passwordValue === passwordVerificationValue) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    }
  }, [passwordValue, passwordVerificationValue]);

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
                  : '비밀번호는 영어+숫자 8~15자리로 입력할 수 있어요'}
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
