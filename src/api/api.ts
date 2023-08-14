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

// export const getMapPing = async (isdone: boolean, lat: number, lon: number) => {
//   try {
//     const response = await axios.get(
//       `${URL}/main?&isdone=${isdone}&latitude=${lat}&longitude=${lon}`,
//     );
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getMapPing = async (isdone: boolean) => {
  try {
    const response = await axios.get(`${URL}/main?&isdone=${isdone}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

// export const getSidebarPosts = async (
//   page: number,
//   sort: string,
//   isdone: boolean,
//   lat: number,
//   lon: number,
// ) => {
//   try {
//     const response = await axios.get(
//       `${URL}/main?page=${page}&size=5&sort${sort}&isdone=${isdone}&latitude=${lat}&longitude=${lon}`,
//     );
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getSidebarPosts = async (
  page: number,
  sort: string,
  isdone: boolean,
) => {
  try {
    const response = await axios.get(
      `${URL}/main?page=${page}&size=5&sort${sort}&isdone=${isdone}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSelectPost = async (postId: number) => {
  const response = await axios.get(`${URL}/main/${postId}`);
  return response.data;
};
