import { api } from './api';

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
      console.log(e);
      return e;
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
