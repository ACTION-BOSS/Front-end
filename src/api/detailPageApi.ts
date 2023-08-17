import { useModal } from '../providers';
import { api } from './api';
import { AxiosError } from 'axios';

const getHeaderWithToken = () => {
  const token = localStorage.getItem('token');
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined;

  return headers;
};

export const fetchDetailPageData = (postId: string | undefined) => {
  const headers = getHeaderWithToken();
  const { openModal } = useModal();

  const getDetailPageData = async () => {
    try {
      const response = await api.get(`/posts/${postId}`, {
        headers: headers,
      });

      if (response.status === 200) {
        return response.data.data;
      } else {
        throw new Error(`게시글 불러오기 실패 / status :  ${response.status}`);
      }
    } catch (e) {
      const AxiosError = e as AxiosError;

      console.log(AxiosError);

      if (AxiosError.response?.status === 418) {
        alert('이미 완료된 민원글입니다.');
        location.href = '/main';
        // openModal(EModalType.DONE);
      }

      if (AxiosError.response?.status === 404) {
        alert('존재하지 않는 게시글입니다.');
        location.href = '/main';
        // openModal(EModalType.DONE);
      }

      return AxiosError;
    }
  };

  return { getDetailPageData, currentPageId: postId };
};

export const deletePostedData = async (postId: string | undefined) => {
  const headers = getHeaderWithToken();

  try {
    const response = await api.delete(`/posts/${postId}`, {
      headers: headers,
    });

    if (response.status === 200) {
      console.log('민원글 삭제에 성공');
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
  const headers = getHeaderWithToken();

  try {
    const response = await api.post(`/posts/${postId}/done`, {
      headers: headers,
    });

    if (response.status === 200) {
      console.log(response.data.msg);
      return response.data;
    } else {
      throw new Error(`완료했어요 실패/ status: ${response.status}`);
    }
  } catch (e) {
    const AxiosError = e as AxiosError;

    console.log(AxiosError);

    if (AxiosError.response?.status === 404) {
      alert('존재하지 않는 게시글입니다.');
      location.href = '/main';
      // openModal(EModalType.DONE);
    }

    return AxiosError;
  }
};

export const toggleMetooData = async (postId: string | undefined) => {
  const headers = getHeaderWithToken();

  try {
    const response = await api.post(`/posts/${postId}/agree`, {
      headers: headers,
    });

    if (response.status === 200) {
      console.log(response.data.msg);
      return response.data;
    } else {
      throw new Error(`나도 불편해요 실패/ status: ${response.status}`);
    }
  } catch (e) {
    const AxiosError = e as AxiosError;

    console.log(AxiosError);

    return AxiosError;
  }
};
