import axios, { AxiosError } from 'axios';
import { Coordinates } from '../pages/MainPage/type';
import { getAccessToken, getRefreshToken, saveAccessToken } from '../shared';

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
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 403 상태 코드가 오면 accessToken이 만료되었다고 판단
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getRefreshToken();
      if (!refreshToken) return Promise.reject(error);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URI}/api/auth/login/reissueToken`,
          {
            headers: { Refresh: `Bearer ${refreshToken}` },
          },
        );

        if (res.status === 201) {
          // 새로운 accessToken 저장
          const newAccessToken = res.headers['access'].split(' ')[1];

          saveAccessToken(newAccessToken);
          api.defaults.headers['Access'] = `Bearer ${newAccessToken}`;

          // 원래 요청 다시 보내기
          originalRequest.headers['Access'] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
        return Promise.reject(error);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export const getMapPing = async (
  isDone: boolean,
  mapCoordinates: Coordinates,
) => {
  const { northlat, eastlon, southlat, westlon } = mapCoordinates;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/main/map?&isdone=${isDone}&northlatitude=${northlat}&eastlongitude=${eastlon}&southlatitude=${southlat}&westlongitude=${westlon}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSidebarPosts = async (
  page: number,
  sort: string,
  isDone: boolean,
  mapCoordinates: Coordinates,
) => {
  const sortOption = sort === '불편순' ? 'agreeCount' : 'createdAt';
  const { northlat, eastlon, southlat, westlon } = mapCoordinates;

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/main?page=${page}&size=5&sort=${sortOption}&isdone=${isDone}&northlatitude=${northlat}&eastlongitude=${eastlon}&southlatitude=${southlat}&westlongitude=${westlon}`,
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

export const getSearchList = async (keyword: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/search?keyword=${keyword}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMyPagePosts = async (page: number, select: number) => {
  const kind = select === 1 ? 'myposts' : select === 2 ? 'comments' : 'agrees';
  try {
    const response = await api.get(`/mypage/${kind}?page=${page}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    const AxiosError = e as AxiosError;
    console.log(AxiosError);

    return AxiosError;
  }
};
