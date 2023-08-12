import { useCallback, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { debounce } from 'lodash';
import {
  $isCodeSent,
  $isEmailCodeVerificated,
  $isEmailSendFailed,
  $isReadyStepTwo,
} from '../../state';

export const useVerificationCode = () => {
  const [isCodeSent, setIsCodeSent] = useRecoilState($isCodeSent);
  const [inputCode, setInputCode] = useState<string>('');
  const setIsEmailSendFailed = useSetRecoilState($isEmailSendFailed);
  const setIsEmailCodeVerificated = useSetRecoilState($isEmailCodeVerificated);
  const setIsReadyStepTwo = useSetRecoilState($isReadyStepTwo);

  const onCodeSendButtonClick = useCallback(
    debounce(() => {
      console.log('CodeSendButtonClicked');

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
    if (/^\d*$/.test(code) || code.length < inputCode.length) {
      if (code.length <= 6) {
        setInputCode(code);
      }
    }
  };

  const isInputFilled = inputCode.length === 6;

  console.log('inputcode', inputCode);

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
    inputCode,
    handleInputChange,
    isInputFilled,
    onEmailCodeAuthenticationButtonClick,
  };
};
