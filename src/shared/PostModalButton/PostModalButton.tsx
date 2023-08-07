import React, { FC } from 'react';
import { ButtonProps } from './type';
import { StButton } from './style';

export const PostModalButton: FC<ButtonProps> = ({ onClick, func }) => {
  let text = '';
  if (func === 'cancel') {
    text = '취소';
  } else if (func === 'verify') {
    text = '확인';
  } else if (func === 'delete') {
    text = '삭제';
  } else if (func === 'modify') {
    text = '수정';
  }
  return (
    <StButton onClick={onClick} func={func}>
      {text}
    </StButton>
  );
};
