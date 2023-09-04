import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { debounce } from 'lodash';
import {
  $isCodeSent,
  $isEmailCodeVerificated,
  $isResetCode,
} from '../../../state';
import { useFormContext, useController } from 'react-hook-form';
import { api, updateEmail } from '../../../../../api';
import { AxiosError } from 'axios';
import { MyPageFormData } from './MyPageForm';

export const useVerificationCode = () => {
  const { control } = useFormContext<MyPageFormData>();

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

  const setIsEmailCodeVerificated = useSetRecoilState($isEmailCodeVerificated);
  const setIsResetCode = useSetRecoilState($isResetCode);

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

          const emailUpdateStatus = await updateEmail(
            emailIdValue,
            emailDomainValue,
          );

          if (emailUpdateStatus === 201) {
            console.log('hi');
          }
        } else {
          setIsEmailCodeVerificated(false);
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        if (AxiosError.response && AxiosError.response.status === 400) {
          setIsEmailCodeVerificated(false);
        }

        console.log('err', AxiosError);
      }
    }, 1000),
    [successKeyValue, emailDomainValue, emailIdValue, updateEmail],
  );

  const reSendEmail = useCallback(
    debounce(async () => {
      try {
        const response = await api.post('auth/signup/emailSend', {
          email: `${emailIdValue}@${emailDomainValue}`,
        });

        setIsResetCode(true);

        if (response.status === 201) {
          return;
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        if (AxiosError.response) {
          if (AxiosError.response.status === 400) {
            // console.log('error: ', AxiosError);
          }
        }
      }
    }, 1000),
    [emailDomainValue, emailIdValue],
  );

  return {
    isCodeSent,
    inputCode: successKeyValue,
    handleInputChange,
    isInputFilled,
    onEmailCodeAuthenticationButtonClick,
    reSendEmail,
  };
};
