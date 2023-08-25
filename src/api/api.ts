import axios from 'axios';
import { Coordinates } from '../pages/MainPage/type';
import { getAccessToken } from '../shared';

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
      config.headers['authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
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
