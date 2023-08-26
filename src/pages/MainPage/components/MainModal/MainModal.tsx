import React, { FC } from 'react';
import {
  ClearSumIcon,
  MyDirectIcon,
  UncomBigIcon,
  XButtonBigIcon,
} from '../../../../assets';
import * as s from './MainModalStyle';
import { Post } from '../../type';

type MainModalProps = {
  onClick(): void;
  post: Post;
};
export const MainModal: FC<MainModalProps> = ({ onClick, post }) => {
  const { address, done, thumbnail, agreeCount, title, nickname } = post;
  let croppedAddress = address.split(' ').slice(0, 3).join(' ');

  return (
    <s.MainModalContainer>
      <s.MainModalTop>
        <div className="address">
          <MyDirectIcon />
          <div>(민원위치) {croppedAddress}</div>
        </div>
        <div className="xButton" onClick={onClick}>
          <XButtonBigIcon />
        </div>
      </s.MainModalTop>
      <s.MainModalMiddle $isDone={done}>
        <div className="postImg">{done && <ClearSumIcon />}</div>
        <img src={thumbnail} />
        <s.UnLike>
          <UncomBigIcon size={24} />
          <div>{agreeCount}</div>
        </s.UnLike>
      </s.MainModalMiddle>
      <s.MainModalBottom>
        <div className="title">{title}</div>
        <div className="nickname">{nickname}</div>
      </s.MainModalBottom>
    </s.MainModalContainer>
  );
};
