import { useController, useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';
import { EModalType, useModal } from '../../../../../providers';
import { api } from '../../../../../api';
import { AxiosError } from 'axios';

export const useChangePassword = (
  refetchUserData: (() => void) | undefined,
) => {
  const { control } = useFormContext<MyPageFormData>();
  const { openModal, closeModal } = useModal();
  //   const setIsNicknameChangeFinished = useSetRecoilState(
  //     $isNicknameChangeFinished,
  //   );

  const {
    field: { value: password },
  } = useController({
    control: control,
    name: 'password',
  });
  const changePassword = async () => {
    try {
      const response = await api.patch('/mypage/updatePassword', {
        password,
      });

      if (response.status === 201) {
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
      const axiosError = e as AxiosError;

      if (axiosError.response?.status === 404) {
        console.log('가입되지 않은 계정입니다.');
      }
    }
  };

  return {
    changePassword,
  };
};
