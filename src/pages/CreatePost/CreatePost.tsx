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

  const sendPostRequest = async () => {
    const formData = new FormData();
    formData.append('latitude', String(post.latitude));
    formData.append('longitude', String(post.longitude));
    formData.append('address', post.address);
    formData.append('title', post.title);
    formData.append('content', post.content);
    post.images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URI}/posts`,
        formData,
      );
      // Handle response here, e.g.:
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
