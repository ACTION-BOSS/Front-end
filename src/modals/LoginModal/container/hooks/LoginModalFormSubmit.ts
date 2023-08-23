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
import { useLocation, useNavigate } from 'react-router-dom';
import { saveAccessToken, saveRefreshToken } from '../../../../shared';

export const useLoginModalFormSubmit = () => {
  const { handleSubmit } = useFormContext<LoginModalFormData>();
  const setIsVerificationFailed = useSetRecoilState($isVerificationFailed);
  const { closeModal } = useModal();

  // TODO
  const navigate = useNavigate();
  const location = useLocation();

  // 내 페이지로 다시 렌덜잉
  const reloadPage = () => {
    navigate(location.pathname);
  };

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

        console.log('login response', response);

        if (response.status === 200) {
          console.log('로그인 요청 시 헤더:', response.headers);
          const accessToken = response.headers['access'].split(' ')[1];
          const refreshToken = response.headers['refresh'].split(' ')[1];

          console.log('access_token: ', accessToken);
          console.log('refresh_token: ', refreshToken);

          // localStorage에 저장
          accessToken && saveAccessToken(accessToken);
          refreshToken && saveRefreshToken(refreshToken);

          if (accessToken && refreshToken) {
            console.log('로그인 성공!');
            closeModal();
            // 아예 새로고침
            window.location.reload();
          }
        }
      } catch (e) {
        console.log(e);
        const AxiosError = e as AxiosError;

        if (AxiosError.response) {
          if (AxiosError.response.status === 401) {
            setIsVerificationFailed(true);
          } else if (AxiosError.response.status === 403) {
            // access token 만료했을 떄
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
