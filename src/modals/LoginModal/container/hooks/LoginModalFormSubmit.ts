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
import { saveAccessToken, saveRefreshToken } from '../../../../shared';

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

        if (response.status === 200) {
          const accessToken = response.headers['access'].split(' ')[1];
          accessToken && saveAccessToken(accessToken);

          const refreshToken = response.headers['refresh'].split(' ')[1];
          refreshToken && saveRefreshToken(refreshToken);

          if (accessToken && refreshToken) {
            closeModal();
            window.location.reload();
          }
        }
      } catch (e) {
        console.log(e);
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
