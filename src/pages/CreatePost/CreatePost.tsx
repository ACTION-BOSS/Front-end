import { useRecoilValue } from 'recoil';
import axios from 'axios';
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
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { createPostState } from './state';
import { Theme } from '../../styles';
import { EModalType, useModal } from '../../providers';

export const CreatePost = () => {
  const { openModal, closeModal } = useModal();
  const token = getAccessToken();
  const post = useRecoilValue(createPostState);
  const navigate = useNavigate();

  if (!token) {
    window.location.replace('javascript:history.back()');
    return null;
  }

  const isFormValid = () => {
    return (
      post.title &&
      post.content &&
      post.address &&
      post.latitude &&
      post.longitude &&
      post.images &&
      post.images.length > 0
    );
  };

  const handleCreatePostClick = () => {
    if (isFormValid()) {
      openModal(EModalType.POP_UP, {
        title: '작성한 게시물을 업로드 할까요?',
        cancelButton: true,
        functionButton: {
          theme: 'blue',
          label: '확인',
          onClick: () => {
            mutation.mutate(), closeModal();
          },
        },
      });
    } else {
      openModal(EModalType.POP_UP, {
        title: '양식을 모두 입력해주세요',
        cancelButton: false,
        functionButton: {
          theme: 'emptyBlue',
          label: '확인',
          onClick: () => closeModal(),
        },
      });
    }
  };

  console.log(post);

  const sendPostRequest = async () => {
    const formData = new FormData();
    const postJSON = JSON.stringify({
      title: post.title,
      content: post.content,
      latitude: post.latitude,
      longitude: post.longitude,
      address: post.address,
    });

    const blob = new Blob([postJSON], { type: 'application/json' });
    formData.append('post', blob);
    post.images.forEach((image) => {
      formData.append(`images`, image);
    });

    return axios.post(`${process.env.REACT_APP_API_URI}/api/posts`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const mutation = useMutation(sendPostRequest, {
    onSuccess: (data) => {
      navigate(`/detail/${data.data.data.postId}`);
    },
    onError: (error) => {
      console.error('게시 요청 실패:', error);
    },
  });

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
            onClick={() =>
              openModal(EModalType.POP_UP, {
                title: '작업을 중단하고 나가시겠습니까?',
                cancelButton: true,
                functionButton: {
                  theme: 'pink',
                  label: '나가기',
                  onClick: () => {
                    navigate(-1);
                    closeModal();
                  },
                },
              })
            }
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
