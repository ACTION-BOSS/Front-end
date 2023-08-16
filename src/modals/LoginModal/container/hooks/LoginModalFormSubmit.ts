import { useCallback } from 'react';
import {
  useFormContext,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { api } from '../../../../api';
import { LoginModalFormData } from './LoginModalForm';

export const useLoginModalFormSubmit = () => {
  const { handleSubmit } = useFormContext<LoginModalFormData>();

  const onFormError: SubmitErrorHandler<LoginModalFormData> = useCallback(
    async (error) => {},
    [],
  );

  const onFormSubmit: SubmitHandler<LoginModalFormData> = useCallback(
    async (data) => {
      const { password, emailId, emailDomain } = data;
      try {
        const response = await api.post('auth/login', {
          password,
          email: `${emailId}@${emailDomain}`,
        });

        if (response.status === 200) {
          console.log(response);

          // Authorization 헤더에서 토큰 추출
          const token = response.headers['authorization'];

          // "Bearer "를 제거합니다. (만약 헤더에 "Bearer "가 붙어있다면)
          const actualToken = token.split(' ')[1];

          // 토큰을 localStorage에 저장
          localStorage.setItem('token', actualToken);
        }
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
