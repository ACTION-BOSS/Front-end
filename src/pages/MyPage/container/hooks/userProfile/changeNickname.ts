import { useController, useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';
import { EModalType, useModal } from '../../../../../providers';
import { api } from '../../../../../api';
import { AxiosError } from 'axios';
import {
  handleLogout,
  saveAccessToken,
  saveRefreshToken,
} from '../../../../../shared';

export const useChangeNickname = (
  refetchUserData: (() => void) | undefined,
) => {
  const { control } = useFormContext<MyPageFormData>();
  const { openModal, closeModal } = useModal();

  const {
    field: { value: nickname },
  } = useController({
    control: control,
    name: 'nickname',
  });

  const changeNickName = async () => {
    try {
      const response = await api.patch('/mypage/updateNickname', {
        nickname: nickname,
      });

      if (response.status === 201) {
        const accessToken = response.headers['access'].split(' ')[1];
        const refreshToken = response.headers['refresh'].split(' ')[1];

        handleLogout();
        accessToken && saveAccessToken(accessToken);
        refreshToken && saveRefreshToken(refreshToken);

        openModal(EModalType.POP_UP, {
          title: '변경이 완료되었습니다.',
          cancelButton: false,
          functionButton: {
            theme: 'emptyBlue',
            label: '확인',
            onClick: () => {
              refetchUserData && refetchUserData();
              closeModal();
            },
          },
        });
      }
    } catch (e) {
      const AxiosError = e as AxiosError;

      if (AxiosError.response?.status === 400) {
        console.log(AxiosError);
      }
    }
  };

  return {
    changeNickName,
  };
};
