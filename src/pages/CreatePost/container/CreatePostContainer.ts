import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { getAccessToken } from '../../../shared';
import { createPostState } from '../state';
import { EModalType, useModal } from '../../../providers';

export const useCreatePost = () => {
  const { openModal, closeModal } = useModal();
  const token = getAccessToken();
  const [post, setPost] = useRecoilState(createPostState);
  const navigate = useNavigate();

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
      setPost({
        title: '',
        content: '',
        address: '',
        latitude: 0,
        longitude: 0,
        images: [],
      });
      navigate(`/detail/${data.data.data.postId}`);
    },
    onError: (error) => {
      console.error('게시 요청 실패:', error);
    },
  });

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

  const handleCancelClick = () => {
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
    });
  };

  return {
    handleCreatePostClick,
    handleCancelClick,
  };
};
