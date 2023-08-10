import { useState } from 'react';

export const useVerificationCode = () => {
  const [isCodeSended, setIsCodeSended] = useState<boolean>(false);
  const [inputCode, setInputCode] = useState<string>('');
  const [isOverFiveLetter, setIsOverFiveLetter] = useState<boolean>(false);

  const onCodeSendButtonClick = () => {
    setIsCodeSended(true);
  };

  const handleInputChange = (code: string) => {
    if (/^\d*$/.test(code) || code.length < inputCode.length) {
      if (code.length <= 6) {
        setInputCode(code);
      }
    }
  };

  const isInputFilled = inputCode.length === 6;

  console.log('inputcode', inputCode);

  return {
    isCodeSended,
    onCodeSendButtonClick,
    inputCode,
    handleInputChange,
    isInputFilled,
  };
};
