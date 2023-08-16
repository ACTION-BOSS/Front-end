import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MODAL_ATTRIBUTES } from '../CreatePost/const';
import { EditFormView } from './views';
import { useRecoilState } from 'recoil';
import { postState } from '../../providers';
import {
  StEditPostContainer,
  StBtnContainer,
  StBtnBox1,
  StBtnBox2,
  StBg,
  StSkyline,
  StGrayBg,
} from './style';
import { Button } from '../../shared';
import { Portal, PostModal } from '../../shared/PostModal';

export const EditPost = () => {
  const token = localStorage.getItem('token');
  const [post, setPost] = useRecoilState(postState);

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('default');

  const { id: stringId } = useParams();
  const id = Number(stringId);

  const getPostDetail = async (id: number) => {
    const response = await axios.get(`/api/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    data: postData,
    isError,
    isLoading,
  } = useQuery(['postDetail', id], () => getPostDetail(id));

  useEffect(() => {
    if (postData) {
      setPost(postData);
    }
  }, [postData, setPost]);

  const mutation = useMutation(
    () =>
      axios.put(`/api/posts/${id}`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        // 성공 시 처리
      },
      onError: (error) => {
        // 오류 시 처리
      },
    },
  );

  const sendEditRequest = () => {
    mutation.mutate();
  };

  const onClickHandleModal = () => {
    if (post.title && post.content) {
      setModalType('edit');
      setOpenModal(!openModal);
    } else {
      setModalType('warning');
      setOpenModal(!openModal);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching the post</div>;
  }

  return (
    <StEditPostContainer>
      <EditFormView />
      <StBtnContainer>
        <StBtnBox1>
          <Button label="취소" $buttonTheme="empty" size="small" />
        </StBtnBox1>
        <StBtnBox2>
          <Button
            onClick={onClickHandleModal}
            label="수정"
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
            sendEditRequest={sendEditRequest}
            attribute={MODAL_ATTRIBUTES.EDIT}
            modalType={modalType}
          />
        </Portal>
      )}
    </StEditPostContainer>
  );
};
