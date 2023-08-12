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

export const useVerificationCode = () => {
  const { control } = useFormContext<SignupModalFormData>();
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
