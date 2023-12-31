import { useNavigate } from 'react-router-dom';
import { api } from './api';
import { AxiosError } from 'axios';
import { EModalType, useModal } from '../providers';

export const useFetchDetailPageData = (postId: string | undefined) => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const getDetailPageData = async () => {
    try {
      const response = await api.get(`/posts/${postId}`);

      if (response.status === 200) {
        return response.data.data;
      }
    } catch (e) {
      const AxiosError = e as AxiosError;
      console.log(AxiosError);

      if (AxiosError.response?.status === 404) {
        navigate('/notfound');
        openModal(EModalType.POP_UP, {
          title: '존재하지 않는 게시글입니다',
          cancelButton: false,
          functionButton: {
            label: '닫기',
            onClick: () => {
              closeModal();
            },
            theme: 'emptyBlue',
          },
        });
      }

      return AxiosError;
    }
  };

  return { getDetailPageData, currentPageId: postId };
};

export const deletePostedData = async (postId: string | undefined) => {
  try {
    const response = await api.delete(`/posts/${postId}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`게시글 삭제 실패 / status: ${response.status}`);
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const toggleDoneData = async (postId: string | undefined) => {
  try {
    const response = await api.post(`/posts/${postId}/done`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`완료했어요 실패/ status: ${response.status}`);
    }
  } catch (e) {
    const AxiosError = e as AxiosError;
    console.log(AxiosError);
    return AxiosError;
  }
};

export const toggleMetooData = async (postId: string | undefined) => {
  try {
    const response = await api.post(`/posts/${postId}/agree`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`나도 불편해요 실패 status: ${response.status}`);
    }
  } catch (e) {
    const AxiosError = e as AxiosError;
    console.log(AxiosError);
    return AxiosError;
  }
};
