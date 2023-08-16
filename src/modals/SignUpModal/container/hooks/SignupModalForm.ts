import { useForm } from 'react-hook-form';

export type SignupModalFormData = {
  emailId: string;
  emailDomain: string;
  successKey: string;
  password: string;
  passwordVerification: string;
  nickname: string;
};

export const useSignupModalForm = () => {
  const defaultValues = {
    emailId: '',
    emailDomain: '',
    successKey: '',
    password: '',
    passwordVerification: '',
    nickname: '',
  };

  const form = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: 'all',
  });

  return { form };
};
