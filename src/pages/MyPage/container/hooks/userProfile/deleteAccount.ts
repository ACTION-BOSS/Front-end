import { useNavigate } from 'react-router-dom';
import { EModalType, useModal } from '../../../../../providers';
import { handleLogout } from '../../../../../shared';
import { api } from '../../../../../api';

export const useDeleteUserAccount = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleDeleteButtonClick = () => {
    openModal(EModalType.POP_UP, {
      title: '정말로 탈퇴하시겠습니까?',
      cancelButton: true,
      functionButton: {
        theme: 'pink',
        label: '탈퇴',
        onClick: async () => {
          closeModal();

          try {
            const response = await api.delete('/mypage/deleteAccount');
            console.log(response);

            if (response.status === 200) {
              openModal(EModalType.POP_UP, {
                title: '탈퇴가 완료되었습니다.',
                cancelButton: false,
                functionButton: {
                  theme: 'emptyBlue',
                  label: '확인',
                  onClick: () => {
                    handleLogout();
                    closeModal();
                    window.location.reload();
                  },
                },
              });

              return response;
            }

            if (response.status === 404) {
              openModal(EModalType.POP_UP, {
                title: '탈퇴에 실패하였습니다.',
                cancelButton: false,
                functionButton: {
                  theme: 'emptyBlue',
                  label: '확인',
                  onClick: () => {
                    closeModal();
                  },
                },
              });
            }
            closeModal();

            return response;
          } catch (e) {
            console.log(e);

            return e;
          }
        },
      },
    });
  };

  return { handleDeleteButtonClick };
};
