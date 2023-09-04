import { useForm } from 'react-hook-form';

export type LoginModalFormData = {
  emailId: string;
  emailDomain: string;
  password: string;
};

export const useLoginModalForm = () => {
  const defaultValues = {
    emailId: '',
    emailDomain: '',
    password: '',
  };

  const form = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: 'all',
  });

  return { form };
};
