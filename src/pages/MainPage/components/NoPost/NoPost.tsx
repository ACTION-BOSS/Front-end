import React from 'react';
import * as s from './NoPostStyle';
import { BAG } from '../../../../assets';

export const NoPost = () => {
  return (
    <s.NoPost>
      <img src={BAG} />
      <div>
        우리동네는 아직 <br />
        게시물이 없어요
      </div>
    </s.NoPost>
  );
};
