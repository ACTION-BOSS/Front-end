import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const getMapPing = async (sort: string) => {
  const isdone = sort === '해결순' ? true : false;
  try {
    const response = await axios.get(`/api/main/map?&isdone=${isdone}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSidebarPosts = async (page: number, sort: string) => {
  const isdone = sort === '해결순' ? true : false;
  const sortOption = sort === '불편순' ? 'likeCount' : 'createdAt';
  try {
    const response = await axios.get(
      `/api/main?page=${page}&size=5&sort=${sortOption}&isdone=${isdone}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSelectPost = async (postId: number) => {
  try {
    const response = await axios.get(`/api/main/${postId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
