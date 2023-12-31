import React, { FC } from 'react';
import { ClearSumIcon } from '../../../../assets';
import * as s from './MainModalStyle';
import { Post } from '../../type';
import { useNavigate } from 'react-router-dom';

type MainModalProps = {
  onClick(): void;
  post: Post;
};
export const MainModal: FC<MainModalProps> = ({ onClick, post }) => {
  const navigate = useNavigate();
  const { address, done, thumbnail, agreeCount, title, nickname, postId } =
    post;
  let croppedAddress = address.split(' ').slice(0, 3).join(' ');

  const onClickMovePage = (postId: number) => {
    navigate(`/detail/${postId}`);
  };

  return (
    <s.MainModalContainer>
      <s.MainModalTop>
        <div className="title">{title}</div>
        <div className="xButton" onClick={onClick}>
          <s.GrayX />
        </div>
      </s.MainModalTop>
      <s.MainModalMiddle $isDone={done} onClick={() => onClickMovePage(postId)}>
        <div className="postImg">{done && <ClearSumIcon />}</div>
        <img src={thumbnail} alt="게시물 사진" />
        <s.UnLike>
          <s.Uncom />
          <div>{agreeCount}</div>
        </s.UnLike>
      </s.MainModalMiddle>
      <s.MainModalBottom>
        <div className="address">
          <s.Direct />
          <div>{croppedAddress}</div>
        </div>
        <div className="nickname">
          {nickname.length > 6
            ? nickname.slice(0, 10).padEnd(13, '...')
            : nickname}
        </div>
      </s.MainModalBottom>
    </s.MainModalContainer>
  );
};
