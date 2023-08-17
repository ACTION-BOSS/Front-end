import { FC, useState } from 'react';
import {
  EmailPasswordView,
  NicknameView,
  PasswordVerificationView,
} from '../views';
import { EStep } from '../type';
import { useSignupModalFormController, useVerificationCode } from './hooks';
import { useRecoilValue } from 'recoil';
import { $stepIndex } from '../state';

type SignupModalContainerProps = {};

export const SignupModalContainer: FC<SignupModalContainerProps> = ({}) => {
  const step = useRecoilValue($stepIndex);

  const {
    onChangeNickname,
    onChangePassword,
    onChangePasswordVerification,
    onChangeEmailId,
    onChangeEmailDomain,
    nicknameValue,
    passwordValue,
    passwordVerificationValue,
    emailIdValue,
    emailDomainValue,
  } = useSignupModalFormController();

  const {
    onCodeSendButtonClick,
    inputCode,
    handleInputChange,
    isInputFilled,
    onEmailCodeAuthenticationButtonClick,
    reSendEmail,
  } = useVerificationCode();

  const [isSelfTypeMode, setIsSelfTypeMode] = useState<boolean>(false);
  const setToSelfTypeMode = () => {
    setIsSelfTypeMode(true);
  };

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
      {step === EStep.STEP2 && (
        <PasswordVerificationView
          passwordValue={passwordValue}
          passwordVerificationValue={passwordVerificationValue}
          onChangePassword={onChangePassword}
          onChangePasswordVerification={onChangePasswordVerification}
        />
      )}
      {step === EStep.STEP3 && (
        <NicknameView
          nicknameValue={nicknameValue}
          onChangeNickname={onChangeNickname}
        />
      )}
    </>
  );
};
