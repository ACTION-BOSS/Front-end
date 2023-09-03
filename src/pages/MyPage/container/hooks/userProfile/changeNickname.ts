import { useController, useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';
import { EModalType, useModal } from '../../../../../providers';

export const useChangeNickname = () => {
  const { control } = useFormContext<MyPageFormData>();
  const { openModal, closeModal } = useModal();

  const {
    field: { value: nickname },
  } = useController({
    control: control,
    name: 'nickname',
  });

  const changeNickName = async () => {
    console.log('changeNickname');

    openModal(EModalType.POP_UP, {
      title: '변경이 완료되었습니다.',
      cancelButton: false,
      functionButton: {
        theme: 'emptyBlue',
        label: '확인',
        onClick: () => {
          closeModal();
        },
      },
    });

    //   const res = await api.post('/someEndpoint', {
    //     nickname: nickname,
    //   });

    //   if (res.status === 201) {
    //     openModal(EModalType.POP_UP);
    //   } else {
    //     //error
    //   }
  };

  return {
    changeNickName,
  };
};
