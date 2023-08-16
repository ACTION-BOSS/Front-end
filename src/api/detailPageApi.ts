import { api } from './api';

export const fetchDetailPageData = (id: number) => {
  const token = localStorage.getItem('token');
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined;

  const getDetailPageData = async () => {
    const response = await api.get(`/posts/${id}`, {
      headers: headers,
    });

    try {
      if (response.status === 200) {
        return response.data.data;
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  return { getDetailPageData };
};
