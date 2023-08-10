import { useState } from 'react';
import { Button } from '../../shared';
import { Portal, PostModal } from '../../shared/PostModal';
import { MODAL_ATTRIBUTES } from './const';
import { CreateFormView, MapView } from './views';
import {
  StCreatePostContainer,
  StBtnContainer,
  StBtnBox1,
  StBtnBox2,
} from './style';

export const CreatePost = () => {
  const [openModal, setOpenModal] = useState(false);

  const onClickHandleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <StCreatePostContainer>
      <CreateFormView />
      <MapView />
      <StBtnContainer>
        <StBtnBox1>
          <Button label="취소" $buttonTheme="emptyGray" size="small" />
        </StBtnBox1>
        <StBtnBox2>
          <Button
            onClick={onClickHandleModal}
            label="게시물 작성"
            $buttonTheme="blue"
            size="small"
          />
        </StBtnBox2>
      </StBtnContainer>

      {openModal && (
        <Portal>
          <PostModal
            onClick={onClickHandleModal}
            attribute={MODAL_ATTRIBUTES.UPLOAD}
          />
        </Portal>
      )}
    </StCreatePostContainer>
  );
};
