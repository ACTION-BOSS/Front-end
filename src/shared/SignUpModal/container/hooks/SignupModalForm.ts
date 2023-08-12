import { useForm } from 'react-hook-form';

export type SignupModalFormData = {
  emailId: string;
  emailDomain: string;
  password: string;
  passwordVerification: string;
  phoneNumber: string;
  userName: string;
  nickname: string;
};

export const useSignupModalForm = () => {
  // 관리 될 form 의 초기값
  const defaultValues = {
    emailId: '',
    emailDomain: '',
    password: '',
    passwordVerification: '',
    phoneNumber: '',
    userName: '',
    nickname: '',
  };

  // react-hook-form이 제공해주는 form 관리 hook
  const form = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: 'all',
  });

  return { form };
};
