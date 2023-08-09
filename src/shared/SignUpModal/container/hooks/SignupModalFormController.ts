import { useController, useFormContext } from 'react-hook-form';
import { SignupModalFormData } from './SignupModalForm';

export const useSignupModalFormController = () => {
  const { control, watch } = useFormContext<SignupModalFormData>();

  console.log(watch());

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
    field: { value: emailValue, onChange: onChangeEmail },
  } = useController({
    control: control,
    name: 'email',
  });
  const {
    field: { value: userNameValue, onChange: onChangeUserName },
  } = useController({
    control: control,
    name: 'userName',
  });
  const {
    field: { value: phoneNumberValue, onChange: onChangePhoneNumber },
  } = useController({
    control: control,
    name: 'phoneNumber',
  });

  return {
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
  };
};