import { FC } from 'react';
import {
  EmailPasswordView,
  NicknameView,
  PasswordVerificationView,
} from '../views';
import { useRecoilValue } from 'recoil';
import { $stepIndex } from '../state';
import { EStep } from '../type';
import { useSignupModalFormController } from './hooks';
type SignupModalContainerProps = {};

export const SignupModalContainer: FC<SignupModalContainerProps> = ({}) => {
  const step = useRecoilValue($stepIndex);

  const {
    onChangeNickname,
    onChangePassword,
    onChangeEmail,
    onChangeUserName,
    onChangePhoneNumber,
    nicknameValue,
    passwordValue,
    emailValue,
    userNameValue,
    phoneNumberValue,
  } = useSignupModalFormController();

  return (
    //@ts-ignore TODO : fix typescript
    <div>
      {step === EStep.STEP1 && (
        <EmailPasswordView
          emailValue={emailValue}
          onChangeEmail={onChangeEmail}
        />
      )}
      {step === EStep.STEP2 && <PasswordVerificationView />}
      {step === EStep.STEP3 && <NicknameView />}
    </div>
  );
};
