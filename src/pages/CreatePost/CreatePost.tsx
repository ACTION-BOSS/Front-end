import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { postState } from '../../providers';
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

export const CreatePost = () => {
  const token = localStorage.getItem('token');
  const post = useRecoilValue(postState);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('default');

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

  console.log(post.images);
  console.log(post.title);
  console.log(post.content);
  console.log(post.latitude);
  console.log(post.longitude);
  console.log(post.address);

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
    console.log('formdata', formData);
    // for (let i = 0; i < post.images.length; i++) {
    //   formData.append('images', post.images[i]);
    // }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}/posts`,
        // '/api/posts',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error('Failed to send post request:', error);
    }
  };

  return (
    <StCreatePostContainer>
      <CreateFormView />
      <MapView />
      <StBtnContainer>
        <StBtnBox1>
          <Button label="취소" $buttonTheme="empty" size="small" />
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
            sendPostRequest={sendPostRequest}
            attribute={MODAL_ATTRIBUTES.UPLOAD}
            modalType={modalType}
          />
        </Portal>
      )}
    </StCreatePostContainer>
  );
};
