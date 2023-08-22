import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { Button } from '../../shared';
import { Portal, PostModal } from '../../shared/PostModal';
import { MODAL_ATTRIBUTES } from './const';
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
import { RecoilProvider } from '../../providers';
import { createPostState } from './state';

export const CreatePost = () => {
  const token = localStorage.getItem('token');
  const post = useRecoilValue(createPostState);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('default');
  const navigate = useNavigate();

  const onClickCancle = () => {
    setModalType('cancle');
    setOpenModal(!openModal);
  };

  if (!token) {
    window.location.replace('javascript:history.back()');
    return null;
  }

  const onClickHandleModal = () => {
    if (
      post.title &&
      post.content &&
      post.address &&
      post.latitude &&
      post.longitude &&
      post.images &&
      post.images.length > 0
    ) {
      setModalType('default');
      setOpenModal(!openModal);
    } else {
      setModalType('warning');
      setOpenModal(!openModal);
    }
  };

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
    <RecoilProvider>
      <StCreatePostContainer>
        <CreateFormView />
        <MapView />
        <StBtnContainer>
          <StBtnBox1>
            <Button
              onClick={onClickCancle}
              label="취소"
              $buttonTheme="empty"
              size="small"
            />
          </StBtnBox1>
          <StBtnBox2>
            <Button
              onClick={onClickHandleModal}
              label="게시물 작성"
              $buttonTheme="blue"
              size="small"
            />
          </StBtnBox2>
        </StBtnContainer>

        <StBg>
          <StSkyline></StSkyline>
          <StGrayBg></StGrayBg>
        </StBg>

        {openModal && (
          <Portal>
            <PostModal
              onClickHandleModal={onClickHandleModal}
              sendPostRequest={() => mutation.mutate()}
              attribute={MODAL_ATTRIBUTES.UPLOAD}
              modalType={modalType}
            />
          </Portal>
        )}
      </StCreatePostContainer>
    </RecoilProvider>
  );
};
