import { useCallback } from 'react';
import {
  useFormContext,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form';
import { api } from '../../../../api';
import { LoginModalFormData } from './LoginModalForm';
import { AxiosError } from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { $isVerificationFailed } from '../../state';
import {
  $tokenExpiryState,
  $tokenState,
  useModal,
} from '../../../../providers';

export const useLoginModalFormSubmit = () => {
  const { handleSubmit } = useFormContext<LoginModalFormData>();
  const setIsVerificationFailed = useSetRecoilState($isVerificationFailed);
  const [tokenState, setTokenState] = useRecoilState($tokenState);
  const setTokenExpiry = useSetRecoilState($tokenExpiryState);
  const { closeModal } = useModal();

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
          const token = response.headers['authorization'];
          const actualToken = token.split(' ')[1];

          // global state에 저장 + 만료시간
          setTokenState(token);
          const expiryDate = new Date();
          expiryDate.setMinutes(expiryDate.getMinutes() + 60);
          setTokenExpiry(expiryDate);

          // localStorage에 저장
          localStorage.setItem('token', actualToken);

          if (token) {
            console.log('로그인 성공!');
            closeModal();
          }
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
