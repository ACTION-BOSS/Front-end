import { useState } from 'react';
import { Button } from '../../shared';
import { Portal, PostModal } from '../../shared/PostModal';
import { MODAL_ATTRIBUTES } from './const';

export const CreatePost = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClickHandleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <input></input>
      <textarea></textarea>
      <div>사진 업로드하는 곳</div>
      <div>지도</div>
      {openModal && (
        <Portal>
          <PostModal
            onClick={onClickHandleModal}
            attribute={MODAL_ATTRIBUTES.UPLOAD}
          />
        </Portal>
      )}
      <Button label="취소" $buttonTheme="gray" size="small" />
      <Button
        onClick={onClickHandleModal}
        label="게시물 작성"
        $buttonTheme="filled"
        size="small"
      />
    </>
  );
};
