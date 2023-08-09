import React from 'react';
import * as s from './MainPostStyle';

export const MainPost = () => {
  return (
    <s.MainPostStyle>
      <s.MainPostImg></s.MainPostImg>
      <s.MainPostContent>
        <div className="title">게시물 제목</div>
        <div className="address">
          <div className="box"></div>
          <div>노원구 공릉동 동일로</div>
        </div>
      </s.MainPostContent>
    </s.MainPostStyle>
  );
};
