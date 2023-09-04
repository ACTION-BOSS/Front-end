import { useController, useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';
import { EModalType, useModal } from '../../../../../providers';
import { api } from '../../../../../api';
import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { $isNicknameChangeFinished } from '../../../state';

export const useChangeNickname = (
  refetchUserData: (() => void) | undefined,
) => {
  const { control } = useFormContext<MyPageFormData>();
  const { openModal, closeModal } = useModal();
  const setIsNicknameChangeFinished = useSetRecoilState(
    $isNicknameChangeFinished,
  );

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

      console.log('response from changeNickname', response);

      if (response.status === 201) {
        setIsNicknameChangeFinished(true);
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
        console.log('이미 존재하는 닉네임');
      }
    }
  };

  return {
    changeNickName,
  };
};
