import { useController, useFormContext } from 'react-hook-form';
import { LoginModalFormData } from './LoginModalForm';

export const useLoginModalFormController = () => {
  const { control, watch } = useFormContext<LoginModalFormData>();

  // console.log(watch());

  const {
    field: { value: passwordValue, onChange: onChangePassword },
  } = useController({
    control: control,
    name: 'password',
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
    onChangePassword,
    onChangeEmailId,
    onChangeEmailDomain,
    passwordValue,
    emailIdValue,
    emailDomainValue,
  };
};
