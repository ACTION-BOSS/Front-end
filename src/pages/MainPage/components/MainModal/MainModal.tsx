import React from 'react';
import { MyDirectIcon, UncomBigIcon, XButtonBigIcon } from '../../../../assets';
import * as s from './MainModalStyle';
import { Post } from '../../type';

interface Props {
  onClick(): void;
  post: Post;
}
export const MainModal = ({ onClick, post }: Props) => {
  return (
    <s.MainModalContainer>
      <s.MainModalTop>
        <div className="address">
          <MyDirectIcon />
          <div>(민원위치) {post.address}</div>
        </div>
        <div className="xButton" onClick={onClick}>
          <XButtonBigIcon />
        </div>
      </s.MainModalTop>
      <s.MainModalMiddle>
        <img src={post.thumbnail} />
        <s.UnLike>
          <UncomBigIcon size={24} />
          <div>{post.likeCount}</div>
        </s.UnLike>
      </s.MainModalMiddle>
      <s.MainModalBottom>
        <div className="title">{post.title}</div>
        <div className="nickname">{post.nickname}</div>
      </s.MainModalBottom>
    </s.MainModalContainer>
  );
};
