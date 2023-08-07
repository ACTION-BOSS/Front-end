import { useState } from 'react';
import { Portal, PostModal } from '../../shared/PostModal';

export const CreatePost = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClickHandleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <button onClick={onClickHandleModal}>게시물 작성</button>
      {openModal && (
        <Portal>
          <PostModal>작성한 게시물을 업로드 할까요?</PostModal>
        </Portal>
      )}
    </>
  );
};
