import { FC, useCallback, useState } from 'react';
import {
  EmailPasswordView,
  NicknameView,
  PasswordVerificationView,
} from '../views';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { $isResetCode, $stepIndex } from '../state';
import { EStep } from '../type';
import { useSignupModalFormController, useVerificationCode } from './hooks';
import { debounce } from 'lodash';
type SignupModalContainerProps = {};

export const SignupModalContainer: FC<SignupModalContainerProps> = ({}) => {
  const step = useRecoilValue($stepIndex);
  const setIsResetCode = useSetRecoilState($isResetCode);

  const {
    onChangeNickname,
    onChangePassword,
    onChangeEmailId,
    onChangeEmailDomain,
    onChangeUserName,
    onChangePhoneNumber,
    nicknameValue,
    passwordValue,
    emailIdValue,
    emailDomainValue,
    userNameValue,
    phoneNumberValue,
  } = useSignupModalFormController();

  const {
    onCodeSendButtonClick,
    inputCode,
    handleInputChange,
    isInputFilled,
    onEmailCodeAuthenticationButtonClick,
  } = useVerificationCode();

  const [isSelfTypeMode, setIsSelfTypeMode] = useState<boolean>(false);
  const setToSelfTypeMode = () => {
    setIsSelfTypeMode(true);
  };

  const reSendEmail = useCallback(
    debounce(() => {
      console.log('이메일 재전송 버튼');
      setIsResetCode(true);
    }, 1000),
    [],
  );

  return (
    //@ts-ignore TODO : fix typescript
    <>
      {step === EStep.STEP1 && (
        <EmailPasswordView
          emailIdValue={emailIdValue}
          onChangeEmailId={onChangeEmailId}
          emailDomainValue={emailDomainValue}
          onChangeEmailDomain={onChangeEmailDomain}
          onCodeSendButtonClick={onCodeSendButtonClick}
          inputCode={inputCode}
          handleInputChange={handleInputChange}
          isInputFilled={isInputFilled}
          isSelfTypeMode={isSelfTypeMode}
          setToSelfTypeMode={setToSelfTypeMode}
          reSendEmail={reSendEmail}
          onEmailCodeAuthenticationButtonClick={
            onEmailCodeAuthenticationButtonClick
          }
        />
      )}
      {step === EStep.STEP2 && <PasswordVerificationView />}
      {step === EStep.STEP3 && <NicknameView />}
    </>
  );
};
