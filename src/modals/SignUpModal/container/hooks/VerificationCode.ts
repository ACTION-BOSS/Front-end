import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { debounce } from 'lodash';
import {
  $isCodeSent,
  $isEmailCodeVerificated,
  $isEmailSendFailed,
  $isReadyStepTwo,
  $isResetCode,
} from '../../state';
import { useFormContext, useController } from 'react-hook-form';
import { SignupModalFormData } from './SignupModalForm';
import { api } from '../../../../api';
import { AxiosError } from 'axios';

export const useVerificationCode = () => {
  const { control } = useFormContext<SignupModalFormData>();

  const {
    field: { value: emailIdValue, onChange: onChangeEmailId },
  } = useController({
    control: control,
    name: 'emailId',
  });

  const {
    field: { value: emailDomainValue, onChange: onChangeEmailDomain },
  } = useController({
    control: control,
    name: 'emailDomain',
  });

  const {
    field: { value: successKeyValue, onChange: onChangeSuccessKeyValue },
  } = useController({
    control: control,
    name: 'successKey',
  });

  const [isCodeSent, setIsCodeSent] = useRecoilState($isCodeSent);
  const setIsEmailSendFailed = useSetRecoilState($isEmailSendFailed);
  const setIsEmailCodeVerificated = useSetRecoilState($isEmailCodeVerificated);
  const setIsReadyStepTwo = useSetRecoilState($isReadyStepTwo);
  const setIsResetCode = useSetRecoilState($isResetCode);

  const onCodeSendButtonClick = useCallback(
    debounce(async () => {
      try {
        const response = await api.post('auth/signup/emailSend', {
          email: `${emailIdValue}@${emailDomainValue}`,
        });

        if (response.status === 201) {
          setIsCodeSent(true);
          setIsEmailSendFailed(false);
          return;
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        console.log('error: ', AxiosError);

        if (AxiosError.response) {
          if (AxiosError.response.status === 400) {
            setIsEmailSendFailed(true);
          }
        }
      }
    }, 1000),
    [emailDomainValue, emailIdValue],
  );

  const handleInputChange = (code: string) => {
    if (/^\d*$/.test(code) || code.length < successKeyValue.length) {
      if (code.length <= 6) {
        onChangeSuccessKeyValue(code);
      }
    }
  };

  const isInputFilled = successKeyValue.length === 6;

  const onEmailCodeAuthenticationButtonClick = useCallback(
    debounce(async () => {
      try {
        const response = await api.post('auth/signup/emailCheck', {
          email: `${emailIdValue}@${emailDomainValue}`,
          successKey: successKeyValue,
        });
        if (response.status === 201) {
          setIsEmailCodeVerificated(true);
          setIsReadyStepTwo(true);
          return;
        }
      } catch (e) {
        const AxiosError = e as AxiosError;
        console.log('err', AxiosError);

        if (AxiosError.response) {
          if (AxiosError.response.status === 400) {
            setIsEmailCodeVerificated(false);
          }
        }
      }
    }, 1000),
    [successKeyValue, emailDomainValue, emailIdValue],
  );

  const reSendEmail = useCallback(
    debounce(async () => {
      try {
        const response = await api.post('auth/signup/emailSend', {
          email: `${emailIdValue}@${emailDomainValue}`,
        });

        if (response.status === 201) {
          return;
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        if (AxiosError.response) {
          if (AxiosError.response.status === 400) {
            console.log('error: ', AxiosError);
          }
        }
      }
    }, 1000),
    [emailDomainValue, emailIdValue],
  );

  return {
    isCodeSent,
    onCodeSendButtonClick,
    inputCode: successKeyValue,
    handleInputChange,
    isInputFilled,
    onEmailCodeAuthenticationButtonClick,
    reSendEmail,
  };
};
