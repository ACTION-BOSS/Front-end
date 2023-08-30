import React from 'react';
import { Button, getAccessToken } from '../../shared';
import { CreateFormView, MapView } from './views';
import {
  StCreatePostContainer,
  StBtnContainer,
  StBtnBox1,
  StBtnBox2,
  StBg,
  StSkyline,
  StGrayBg,
} from './style';
import { Theme } from '../../styles';
import { useCreatePost } from './container';

export const CreatePost = () => {
  const token = getAccessToken();

  if (!token) {
    window.location.replace('javascript:history.back()');
    return null;
  }

  const handlers = useCreatePost();

  if (!handlers) {
    return null;
  }

  const { handleCreatePostClick, handleCancelClick } = handlers;

  return (
    <StCreatePostContainer>
      <CreateFormView />
      <MapView />
      <StBtnContainer>
        <StBtnBox1>
          <Button
            label="취소"
            $buttonTheme="empty"
            size="mediumLong"
            fontSize={Theme.fontSizes.h2}
            onClick={handleCancelClick}
          />
        </StBtnBox1>
        <StBtnBox2>
          <Button
            label="게시물 작성"
            $buttonTheme="blue"
            size="mediumLong"
            fontSize={Theme.fontSizes.h2}
            onClick={handleCreatePostClick}
          />
        </StBtnBox2>
      </StBtnContainer>
      <StBg>
        <StSkyline></StSkyline>
        <StGrayBg></StGrayBg>
      </StBg>
    </StCreatePostContainer>
  );
};
