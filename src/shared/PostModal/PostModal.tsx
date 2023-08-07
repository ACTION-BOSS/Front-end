import React, { FC } from 'react';
import { ModalProps } from './type';
import { StModal } from './style';
import { PostModalButton } from '../PostModalButton';

export const PostModal: FC<ModalProps> = ({ children }) => {
  return (
    <StModal>
      <div>{children}</div>
      <PostModalButton func="cancel" />
      {children === '작성한 게시물을 업로드 할까요?' && (
        <PostModalButton func="verify" />
      )}
      {children === '작성한 게시물을 삭제 할까요?' && (
        <PostModalButton func="delete" />
      )}
      {children === '작성한 게시물을 수정 할까요?' && (
        <PostModalButton func="modify" />
      )}
    </StModal>
  );
};
