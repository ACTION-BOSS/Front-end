import { useFormContext } from 'react-hook-form';
import { MyPageFormData } from './MyPageForm';
import { useEffect } from 'react';
import { useMyPageFormController } from './MyPageFormController';
import { useFetchMypageData } from '../../../../../api';
import { useQuery } from '@tanstack/react-query';
import { getAccessToken } from '../../../../../shared';

export const useGetUserData = () => {
  const { setValue } = useFormContext<MyPageFormData>();
  const {
    nicknameValue,
    onChangeNickname,
    emailIdValue,
    onChangeEmailId,
    onChangeEmailDomain,
    emailDomainValue,
  } = useMyPageFormController();
  const { getMyProfileData } = useFetchMypageData();
  const accessToken = getAccessToken();
  const isLoggedIn = !!accessToken;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['userProfile'],
    queryFn: getMyProfileData,
    enabled: isLoggedIn,
  });

  const refetchUserData: () => void = () => {
    refetch();
  };

  const { email: originalEmail = null, nickname: originalNickname = null } =
    isLoading ? {} : data?.data || {};

  useEffect(() => {
    if (originalNickname) {
      setValue('nickname', originalNickname);
    }

    if (originalEmail !== null) {
      const [id, domain] = originalEmail.split('@');
      setValue('emailId', id);
      setValue('emailDomain', domain);
    }
  }, [originalEmail, originalNickname, setValue]);

  if (isLoading) {
    return {
      isLoading,
      data,
      error,
    };
  }

  return {
    isLoading,
    error,
    originalEmail,
    originalNickname,
    nicknameValue,
    onChangeNickname,
    emailIdValue,
    onChangeEmailId,
    onChangeEmailDomain,
    emailDomainValue,
    refetchUserData,
  };
};
