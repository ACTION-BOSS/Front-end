import { api } from './api';
import { AxiosError } from 'axios';

export const useFetchMypageData = () => {
  const getMyProfileData = async () => {
    try {
      const response = await api.get('/mypage/getUserInfo');

      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      const AxiosError = e as AxiosError;
      console.log(AxiosError);

      return AxiosError;
    }
  };

  return { getMyProfileData };
};

export const updateEmail = async (
  emailIdValue: string,
  emailDomainValue: string,
) => {
  try {
    const response = await api.patch('/mypage/updateEmail', {
      email: `${emailIdValue}@${emailDomainValue}`,
    });

    if (response.status !== 200) {
      throw new Error('Failed to update email');
    }

    return response.status;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePassword = async (password: string) => {
  try {
    const response = await api.patch('/mypage/updatePassword', {
      password: password,
    });

    if (response.status !== 200) {
      throw new Error('Failed to update email');
    }

    return response.status;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteAccount = async () => {
  try {
    const response = await api.delete('/mypage/deleteAccount');
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
