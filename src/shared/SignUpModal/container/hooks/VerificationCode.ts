import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { debounce } from 'lodash';
import {
  $isCodeSent,
  $isEmailCodeVerificated,
  $isEmailSendFailed,
  $isReadyStepTwo,
} from '../../state';
import { useFormContext, useController } from 'react-hook-form';
import { SignupModalFormData } from './SignupModalForm';
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://actionboss.store:8080/api',
// });

export const useVerificationCode = () => {
  const { control } = useFormContext<SignupModalFormData>();

  // const {
  //   field: { value: emailIdValue, onChange: onChangeEmailId },
  // } = useController({
  //   control: control,
  //   name: 'emailId',
  // });

  // const {
  //   field: { value: emailDomainValue, onChange: onChangeEmailDomain },
  // } = useController({
  //   control: control,
  //   name: 'emailDomain',
  // });

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

  const onCodeSendButtonClick = useCallback(
    debounce(async () => {
      // const response = await api.post('signup/emailSend', {
      //   email: `${emailIdValue}@${emailDomainValue}`,
      // });

      const response = {
        status: 200,
      };

      if (response.status === 200) {
        setIsCodeSent(true);
        setIsEmailSendFailed(false);
        return;
      }

      if (response.status === 401 || response.status === 403) {
        setIsEmailSendFailed(true);
      }
    }, 1000),
    [],
  );

  const handleInputChange = (code: string) => {
    if (/^\d*$/.test(code) || code.length < successKeyValue.length) {
      if (code.length <= 6) {
        onChangeSuccessKeyValue(code);
      }
    }
  };

  const isInputFilled = successKeyValue.length === 6;

  console.log('inputcode', successKeyValue);

  const onEmailCodeAuthenticationButtonClick = useCallback(
    debounce(() => {
      console.log('onEmailCodeAuthenticationButtonClick');

      const response = {
        status: 200,
      };

      if (response.status === 200) {
        setIsEmailCodeVerificated(true);
        setIsReadyStepTwo(true);
        return;
      }

      if (response.status === 401) {
        setIsEmailCodeVerificated(false);
      }
    }, 1000),
    [],
  );

  return {
    isCodeSent,
    onCodeSendButtonClick,
    inputCode: successKeyValue,
    handleInputChange,
    isInputFilled,
    onEmailCodeAuthenticationButtonClick,
  };
};
