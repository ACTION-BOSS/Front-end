import { useCallback } from 'react';
import {
  useFormContext,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { SignupModalFormData } from './SignupModalForm';
import { api } from '../../../../api';

export const useSignupModalFormSubmit = () => {
  const { handleSubmit } = useFormContext<SignupModalFormData>();

  //watch : 각 데이터 볼수이씀 ex. watch('nickname')

  const onFormError: SubmitErrorHandler<SignupModalFormData> = useCallback(
    async (error) => {
      // error 났을때 처리하고싶은 로직
    },
    [],
  );

  const onFormSubmit: SubmitHandler<SignupModalFormData> = useCallback(
    async (data) => {
      const { nickname, password, emailId, emailDomain, successKey } = data;
      try {
        // 데이터 전송하는 axios
        // 데이터를 가지고 뭔가 하는 로직

        const response = await api.post('/signup', {
          nickname,
          password,
          email: `${emailId}@${emailDomain}`,
          successKey,
        });

        console.log(123, response);
      } catch (error) {
        console.error('error', error);
      }
    },
    [],
  );

  const submit = () => {
    handleSubmit(onFormSubmit, onFormError)();
  };

  return { submit };
};
