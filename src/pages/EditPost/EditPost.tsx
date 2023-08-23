import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MODAL_ATTRIBUTES } from '../CreatePost/const';
import { EditFormView } from './views';
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
import { EditPostType } from './type';
import { Theme } from '../../styles';
import { EditMapView } from './views/EditMapView/EditMapView';

export const EditPost = () => {
  const token = localStorage.getItem('token');
  const [post, setPost] = useState<EditPostType | null>(null);

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('default');

  const navigate = useNavigate();

  const onClickCancle = () => {
    setModalType('cancle');
    setOpenModal(!openModal);
  };

  const { id: stringId } = useParams();
  const id = Number(stringId);

  const getPostDetail = async (id: number) => {
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined;

    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/posts/${id}`,
      {
        headers: headers,
      },
    );
    return response.data.data;
  };

  const { data, isError, isLoading } = useQuery(['postDetail', id], () =>
    getPostDetail(id),
  );

  console.log(data);

  if (data && !data.owner) {
    window.location.replace('javascript:history.back()');
    return null;
  }

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data, setPost]);

  const mutation = useMutation(
    () =>
      axios.put(`${process.env.REACT_APP_API_URI}/api/posts/${id}`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        navigate(`/detail/${id}`);
      },
      onError: (error) => {
        console.error('수정 요청 실패:', error);
      },
    },
  );

  const sendEditRequest = () => {
    mutation.mutate();
  };

  const onClickHandleModal = () => {
    if (data.title && data.content) {
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
      <EditFormView data={data} setPost={setPost} />
      <EditMapView data={data} />

      <StBtnContainer>
        <StBtnBox1>
          <Button
            onClick={onClickCancle}
            label="취소"
            $buttonTheme="empty"
            size="mediumLong"
            fontSize={Theme.fontSizes.h2}
          />
        </StBtnBox1>
        <StBtnBox2>
          <Button
            onClick={onClickHandleModal}
            label="수정 완료"
            $buttonTheme="blue"
            size="mediumLong"
            fontSize={Theme.fontSizes.h2}
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
