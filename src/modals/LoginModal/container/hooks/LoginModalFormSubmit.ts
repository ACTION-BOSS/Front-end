import { useCallback } from 'react';
import {
  useFormContext,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { api } from '../../../../api';
import { LoginModalFormData } from './LoginModalForm';
import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { $isVerificationFailed } from '../../state';

export const useLoginModalFormSubmit = () => {
  const { handleSubmit } = useFormContext<LoginModalFormData>();
  const setIsVerificationFailed = useSetRecoilState($isVerificationFailed);

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
          // Authorization 헤더에서 토큰 추출
          const token = response.headers['authorization'];

          // "Bearer "를 제거합니다. (만약 헤더에 "Bearer "가 붙어있다면)
          const actualToken = token.split(' ')[1];

          // 토큰을 localStorage에 저장
          localStorage.setItem('token', actualToken);

          // 로그인성공시 로직

          location.href = '/';
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        console.log('error: ', AxiosError);

        if (AxiosError.response) {
          if (
            AxiosError.response.status === 401 ||
            AxiosError.response.status === 403
          ) {
            setIsVerificationFailed(true);
          }
        }
      }
    },
    [],
  );

  const submit = () => {
    handleSubmit(onFormSubmit, onFormError)();
  };

  return { submit };
};
