import { useForm } from 'react-hook-form';

export type MyPageFormData = {
  nickname: string;
  emailId: string;
  emailDomain: string;
  successKey: string;
  password: string;
  passwordVerification: string;
};

export const useMyPageForm = () => {
  const defaultValues = {
    nickname: '',
    emailId: '',
    emailDomain: '',
    successKey: '',
    password: '',
    passwordVerification: '',
  };

  const form = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: 'all',
  });

  return { form };
};
