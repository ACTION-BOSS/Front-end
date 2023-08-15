import React from 'react';
import * as s from './MainPostSkeletonStyle';

export const MainPostSkeleton = () => {
  return (
    <s.PostSkeletonStyle>
      <s.MainPostImg />
      <s.MainPostContent>
        <div className="title" />
        <div className="content">
        </div>
      </s.MainPostContent>
    </s.PostSkeletonStyle>
  );
};
