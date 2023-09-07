import { useController, useFormContext } from 'react-hook-form';
import { SignupModalFormData } from './SignupModalForm';

export const useSignupModalFormController = () => {
  const { control, watch } = useFormContext<SignupModalFormData>();

  const {
    field: { value: nicknameValue, onChange: onChangeNickname },
  } = useController({
    control: control,
    name: 'nickname',
  });

  const {
    field: { value: passwordValue, onChange: onChangePassword },
  } = useController({
    control: control,
    name: 'password',
  });

  const {
    field: {
      value: passwordVerificationValue,
      onChange: onChangePasswordVerification,
    },
  } = useController({
    control: control,
    name: 'passwordVerification',
  });

  const {
    field: { value: emailIdValue, onChange: onChangeEmailId },
  } = useController({
    control: control,
    name: 'emailId',
  });

  const {
    field: { value: emailDomainValue, onChange: onChangeEmailDomain },
  } = useController({
    control: control,
    name: 'emailDomain',
  });

  return {
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
  };
};
