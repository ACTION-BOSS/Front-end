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

  console.log(123, isPasswordVerified);

  const [isVerified, setIsVerified] = useRecoilState($isVerified);

  const checkPasswordVerification = () => {
    const PASSWORD_VERIFICATION_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{7,14}$/;

    if (passwordValue.length === 0) {
      setIsPasswordVerified(null);
    } else {
      setIsPasswordVerified(PASSWORD_VERIFICATION_REGEX.test(passwordValue));
    }

    setIsPasswordVerified(PASSWORD_VERIFICATION_REGEX.test(passwordValue));
  };

  const handleChangePassword = (...event: any[]) => {
    checkPasswordVerification();
    onChangePassword(...event);
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
      // @ts-ignore
      setIsReadyStepThree(() => {
        return isVerified;
      });
    } else {
      setIsReadyStepThree(false);
    }
  }, [isVerified, isPasswordVerified]);

  useEffect(() => {
    if (!isPasswordVerified) {
      if (passwordVerificationValue.length === 0) {
        console.log(1);
        return setIsVerified(null);
      }
      if (passwordValue.length === 0) {
        console.log(2);
        return setIsPasswordVerified(null);
      }
      console.log(3);
      return setIsPasswordVerified(false);
    } else {
      if (passwordValue.length === 0) {
        console.log(4);
        setIsPasswordVerified(null);
      }
      if (passwordVerificationValue.length === 0) {
        console.log(5);
        return setIsVerified(null);
      }
      if (passwordValue === passwordVerificationValue) {
        console.log(6);
        return setIsVerified(true);
      } else {
        console.log(7);
        return setIsVerified(false);
      }
    }
  }, [
    passwordValue,
    passwordVerificationValue,
    isPasswordVerified,
    isVerified,
  ]);

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
