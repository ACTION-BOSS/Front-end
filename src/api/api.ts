import axios from 'axios';
import { Coordinates } from '../pages/MainPage/type';
import {
  getAccessToken,
  getRefreshToken,
  handleLogout,
  saveAccessToken,
} from '../shared';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URI}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers['Access'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    if (response.headers.access) {
      const newAccessToken = response.headers.access.split(' ')[1];
      saveAccessToken(newAccessToken);
    }
    return response;
  },
  async (error) => {
    console.log(123123, error);
    if (error.response && error.response.status === 403) {
      const refreshToken = getRefreshToken();
      console.log('refreshToken:', refreshToken);
      if (refreshToken) {
        try {
          // 원래 요청한 엔드포인트로 refresh token과 함께 재요청
          console.log(123, '재요청');
          error.config.data = JSON.stringify({
            ...JSON.parse(error.config.data),
            refreshToken: refreshToken,
          });

          const response = await api.request(error.config);

          // 새로운 access token 저장
          const newAccessToken = response.headers.access.split(' ')[1];
          saveAccessToken(newAccessToken);

          return response; // 재요청한 응답 반환
        } catch (refreshError) {
          handleLogout();
        }
      } else {
        handleLogout();
      }
    }
    return Promise.reject(error);
  },
);

export const getMapPing = async (sort: string, mapCoordinates: Coordinates) => {
  const isdone = sort === '해결순' ? true : false;
  const { northlat, eastlon, southlat, westlon } = mapCoordinates;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/main/map?&isdone=${isdone}&northlatitude=${northlat}&eastlongitude=${eastlon}&southlatitude=${southlat}&westlongitude=${westlon}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSidebarPosts = async (
  page: number,
  sort: string,
  mapCoordinates: Coordinates,
) => {
  const isdone = sort === '해결순' ? true : false;
  const sortOption = sort === '불편순' ? 'agreeCount' : 'createdAt';
  const { northlat, eastlon, southlat, westlon } = mapCoordinates;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/main?page=${page}&size=5&sort=${sortOption}&isdone=${isdone}&northlatitude=${northlat}&eastlongitude=${eastlon}&southlatitude=${southlat}&westlongitude=${westlon}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSelectPost = async (postId: number) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/main/${postId}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
