import { ChangeEvent, useEffect, useState } from 'react';
import { useMyPageFormController } from './MyPageFormController';
import { AxiosError } from 'axios';
import { api } from '../../../../api';

export const useNicknameValidation = () => {
  const { nicknameValue, onChangeNickname } = useMyPageFormController();
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState<
    boolean | null
  >(null);

  const validationCheck = (nickname: string) => {
    const regex = /^[a-zA-Z가-힣0-9]+$/;

    if (nickname.length === 0) {
      return {
        verification: null,
        text: null,
      };
    }

    if (nickname.length < 2 || nickname.length > 15) {
      return {
        verification: false,
        text: '2글자 이상 15글자 이하의 닉네임만 가능합니다',
      };
    } else {
      if (!regex.test(nickname)) {
        return {
          verification: false,
          text: '한글 (자음∙모음 제외), 영어, 숫자만 가능합니다',
        };
      }
      if (isDuplicatedNickname) {
        return {
          verification: false,
          text: '이미 존재하는 닉네임입니다',
        };
      } else {
        return {
          verification: true,
          text: '사용 가능한 닉네임입니다',
        };
      }
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) return;
    onChangeNickname(e);
  };

  const { verification, text } = validationCheck(nicknameValue);

  useEffect(() => {
    const checkNicknameDuplicated = async () => {
      try {
        const response = await api.post('auth/signup/nicknameCheck', {
          nickname: nicknameValue,
        });

        console.log(response);

        if (response.status === 201) {
          setIsDuplicatedNickname(false);
        }
      } catch (e) {
        const AxiosError = e as AxiosError;

        console.log('err', AxiosError);

        if (AxiosError.response?.status === 400) {
          setIsDuplicatedNickname(true);
        }
      }
    };

    checkNicknameDuplicated();
  }, [nicknameValue]);

  return {
    handleChangeInput,
    verification,
    text,
  };
};
