import axios from 'axios';
import { getAccessToken, getRefreshToken, saveAccessToken } from '../shared';
import { api } from './api';

const refreshTokenAndFetch = async (
  url: string,
  headers: { [key: string]: string },
) => {
  try {
    const refreshToken = getRefreshToken();
    const res = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/auth/login/reissueToken`,
      {
        headers: { Refresh: `Bearer ${refreshToken}` },
      },
    );

    if (res.status === 201) {
      const newAccessToken = res.headers['access'].split(' ')[1];
      saveAccessToken(newAccessToken);
      headers['Access'] = `Bearer ${newAccessToken}`;
      const response = await fetch(url, { headers });
      return response;
    }
    throw new Error('Failed to refresh token');
  } catch (err) {
    throw err;
  }
};

export const connectSseWithFetch = async (
  setReader: React.Dispatch<
    React.SetStateAction<ReadableStreamDefaultReader<Uint8Array> | null>
  >,
  setShowNewNotiIcon: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let token = getAccessToken();
  let headers: { [key: string]: string } = { Access: `Bearer ${token}` };

  let response = await fetch(
    `${process.env.REACT_APP_API_URI}/api/notifications/subscribe`,
    { headers },
  );

  if (response.status === 403) {
    // Token has expired, refreshing
    response = await refreshTokenAndFetch(
      `${process.env.REACT_APP_API_URI}/api/notifications/subscribe`,
      headers,
    );
  }

  const newReader = response.body!.getReader();
  setReader(newReader);

  while (true) {
    const { done, value } = await newReader.read();
    if (done) {
      break;
    }
    const eventText = new TextDecoder().decode(value);

    console.log('연결text', eventText);

    if (eventText.slice(0, 13) !== 'event:Connect') {
      setShowNewNotiIcon(true);
    } else {
      setShowNewNotiIcon(false);
    }
  }
};

export const getNotification = async () => {
  const response = await api.get('/notifications');
  return response;
};

export const readNotification = async (notificationId: number) => {
  const response = await api.put(`/notifications/read/${notificationId}`);
  return response;
};

// export const connectSseWithFetch = async (
//   setReader: React.Dispatch<
//     React.SetStateAction<ReadableStreamDefaultReader<Uint8Array> | null>
//   >,
// ) => {
//   const token = getAccessToken();
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };

//   const response = await fetch(
//     `${process.env.REACT_APP_API_URI}/api/notifications/subscribe`,
//     { headers },
//   );

//   const newReader = response.body!.getReader();
//   setReader(newReader);

//   while (true) {
//     const { done, value } = await newReader.read();
//     if (done) {
//       break;
//     }
//     console.log(new TextDecoder().decode(value));
//   }
// };

// export const getNotification = async () => {
//   const token = getAccessToken();
//   const response = await axios.get(
//     `${process.env.REACT_APP_API_URI}/api/notifications`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   return response;
// };
