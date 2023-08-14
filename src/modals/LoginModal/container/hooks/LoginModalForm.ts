import { useForm } from 'react-hook-form';

export type LoginModalFormData = {
  emailId: string;
  emailDomain: string;
  password: string;
};

export const useLoginModalForm = () => {
  // 관리 될 form 의 초기값
  const defaultValues = {
    emailId: '',
    emailDomain: '',
    password: '',
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
