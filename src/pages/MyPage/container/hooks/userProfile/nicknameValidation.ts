import { ChangeEvent, useEffect, useState } from 'react';
import { useMyPageFormController } from './MyPageFormController';
import { AxiosError } from 'axios';
import { api } from '../../../../../api';
import { debounce } from 'lodash';
import { useRecoilValue } from 'recoil';
import { $isNicknameChangeFinished, $isNicknameFocused } from '../../../state';

export const useNicknameValidation = () => {
  const { nicknameValue, onChangeNickname } = useMyPageFormController();
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState<
    boolean | null
  >(null);
  const isNicknameFocused = useRecoilValue($isNicknameFocused);
  const isNicknameChangeFinished = useRecoilValue($isNicknameChangeFinished);

  const validationCheck = (nickname: string) => {
    const regex = /^[a-zA-Z가-힣0-9]+$/;

    if (nickname.length === 0 || isNicknameChangeFinished) {
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

  const { verification, text: validationLabelText } =
    validationCheck(nicknameValue);

  const checkNicknameDuplicated = debounce(async () => {
    try {
      const response = await api.post('auth/signup/nicknameCheck', {
        nickname: nicknameValue,
      });

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
  }, 500);

  useEffect(() => {
    isNicknameFocused && checkNicknameDuplicated();

    return () => {
      checkNicknameDuplicated.cancel();
    };
  }, [nicknameValue, isNicknameFocused]);

  return {
    handleChangeInput,
    verification,
    validationLabelText,
  };
};
