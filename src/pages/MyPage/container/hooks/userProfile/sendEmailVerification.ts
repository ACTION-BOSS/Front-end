import { useController, useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';
import { useCallback } from 'react';
import { debounce } from 'lodash';
import { api } from '../../../../../api';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  $isCodeSent,
  $isEmailSendFailed,
  $isEmailCodeVerificated,
  $isEmailFormatError,
} from '../../../state';
import { AxiosError } from 'axios';

export const useSendEmailVerification = () => {
  const { control } = useFormContext<MyPageFormData>();

  const [isCodeSent, setIsCodeSent] = useRecoilState($isCodeSent);
  const setIsEmailSendFailed = useSetRecoilState($isEmailSendFailed);
  const setIsEmailCodeVerificated = useSetRecoilState($isEmailCodeVerificated);

  const setIsEmailFormatError = useSetRecoilState($isEmailFormatError);

  const {
    field: { value: emailId },
  } = useController({
    control: control,
    name: 'emailId',
  });

  const {
    field: { value: emailDomain },
  } = useController({
    control: control,
    name: 'emailDomain',
  });

  const onCodeSendButtonClick = useCallback(
    debounce(async () => {
      try {
        const response = await api.post('auth/signup/emailSend', {
          email: `${emailId}@${emailDomain}`,
        });

        if (response.status === 201) {
          setIsCodeSent(true);
          setIsEmailSendFailed(false);
          setIsEmailFormatError(false);
          return;
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        // console.log('error: ', AxiosError);

        if (AxiosError.response) {
          if (AxiosError.response.status === 400) {
            setIsEmailFormatError(false);
            setIsEmailSendFailed(true);
          }
          if (AxiosError.response.status === 403) {
            setIsEmailSendFailed(false);
            setIsEmailFormatError(true);
          }
        }
      }
    }, 1000),
    [emailDomain, emailId],
  );

  return {
    onCodeSendButtonClick,
  };
};
