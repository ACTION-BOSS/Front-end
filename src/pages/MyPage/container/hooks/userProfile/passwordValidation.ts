import { useEffect, useState } from 'react';
import { useMyPageFormController } from './MyPageFormController';
import { useSetRecoilState } from 'recoil';
import { $isPasswordValid } from '../../../state';

export const usePasswordValidation = () => {
  const { onChangePassword, passwordValue, passwordVerificationValue } =
    useMyPageFormController();

  const setIsPasswordValid = useSetRecoilState($isPasswordValid);

  const [isPasswordVerified, setIsPasswordVerified] = useState<boolean | null>(
    null,
  );
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  const handleChangePassword = (event: any) => {
    onChangePassword(event);
  };

  const verificationInputErrorText = (isVerified: boolean | null) => {
    if (isPasswordVerified) {
      if (isVerified === null) return '';
      if (isVerified) {
        return '비밀번호가 일치합니다';
      } else {
        return '비밀번호가 서로 다릅니다';
      }
    } else {
      return '';
    }
  };

  useEffect(() => {
    if (isPasswordVerified === true && isVerified === true) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [isPasswordVerified, isVerified]);

  useEffect(() => {
    const PASSWORD_VERIFICATION_REGEX =
      /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9]{8,15}$/;

    // 비밀번호 유효성 검사하기
    if (passwordValue.length === 0) {
      setIsPasswordVerified(null);
    } else {
      setIsPasswordVerified(PASSWORD_VERIFICATION_REGEX.test(passwordValue));
    }

    // 비밀번호 일치 검사하기
    if (passwordVerificationValue.length === 0) {
      setIsVerified(null);
    } else {
      if (passwordValue === passwordVerificationValue) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    }
  }, [passwordValue, passwordVerificationValue]);

  return {
    handleChangePassword,
    isPasswordVerified,
    isVerified,
    verificationInputErrorText,
  };
};
