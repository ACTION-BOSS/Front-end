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
import { useModal } from '../../../../providers';
import { saveAccessToken } from '../../../../shared';

export const useLoginModalFormSubmit = () => {
  const { handleSubmit } = useFormContext<LoginModalFormData>();
  const setIsVerificationFailed = useSetRecoilState($isVerificationFailed);
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

        // console.log('login response', response);

        if (response.status === 200) {
          // console.log('로그인 요청 시 헤더:', response.headers);

          const accessToken = response.headers['authorization'].split(' ')[1];
          // console.log('access_token: ', accessToken);
          accessToken && saveAccessToken(accessToken);

          if (accessToken) {
            // console.log('로그인 성공!');
            closeModal();
            window.location.reload();
          }
        }
      } catch (e) {
        // console.log(e);
        const AxiosError = e as AxiosError;

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
