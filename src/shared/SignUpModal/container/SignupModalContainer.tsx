import { FC } from 'react';
import {
  EmailPasswordView,
  NicknameView,
  PasswordVerificationView,
} from '../views';
import { useRecoilValue } from 'recoil';
import { $stepIndex } from '../state';
import { EStep } from '../type';
import { useSignupModalFormController, useVerificationCode } from './hooks';
type SignupModalContainerProps = {};

export const SignupModalContainer: FC<SignupModalContainerProps> = ({}) => {
  const step = useRecoilValue($stepIndex);

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
    isCodeSended,
    onCodeSendButtonClick,
    inputCode,
    handleInputChange,
    isInputFilled,
  } = useVerificationCode();

  return (
    //@ts-ignore TODO : fix typescript
    <>
      {step === EStep.STEP1 && (
        <EmailPasswordView
          emailIdValue={emailIdValue}
          onChangeEmailId={onChangeEmailId}
          emailDomainValue={emailDomainValue}
          onChangeEmailDomain={onChangeEmailDomain}
          isCodeSended={isCodeSended}
          onCodeSendButtonClick={onCodeSendButtonClick}
          inputCode={inputCode}
          handleInputChange={handleInputChange}
          isInputFilled={isInputFilled}
        />
      )}
      {step === EStep.STEP2 && <PasswordVerificationView />}
      {step === EStep.STEP3 && <NicknameView />}
    </>
  );
};
