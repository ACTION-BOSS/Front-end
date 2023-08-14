import { FC, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { $isReadyStepThree } from '../../state';
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
  // const [isPasswordVerified, setIsPasswordVerified] = useState<boolean | null>(
  //   null,
  // );

  // const checkPasswordVerification = () => {
  //   const PASSWORD_VERIFICATION_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,15}$/;

  //   if(passwordValue.length === 0){
  //     setIsPasswordVerified(null)
  //   } else {
  //     setIsPasswordVerified(PASSWORD_VERIFICATION_REGEX.test(passwordValue))
  //   }

  //   setIsPasswordVerified(PASSWORD_VERIFICATION_REGEX.test(passwordValue));
  // };

  const isVerified =
    passwordVerificationValue.length === 0
      ? null
      : passwordValue === passwordVerificationValue;

  useEffect(() => {
    if (isVerified !== null) {
      setIsReadyStepThree(isVerified);
    }
  }, [isVerified]);

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
              onChange={onChangePassword}
              $isVerificated={isVerified}
            />
          </StInputWrapper>

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
              {isVerified
                ? '비밀번호가 일치합니다'
                : '비밀번호가 서로 다릅니다'}
            </StLabel1Text>
          </StLabelTextWrapper>
        )}
      </StColumnDiv>
    </StWrapper>
  );
};
