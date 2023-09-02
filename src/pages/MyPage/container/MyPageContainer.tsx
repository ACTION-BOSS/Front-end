import { FC } from 'react';
import { UserProfileView } from '../views';
import { useGetUserData } from './hooks';
import { useRecoilValue } from 'recoil';
import { $chosenIndex } from '../state';

type MyPageContainerProps = {};

export const MyPageContainer: FC<MyPageContainerProps> = ({}) => {
  const {
    originalEmail,
    originalNickname,
    originalPassword,
    nicknameValue,
    onChangeNickname,
  } = useGetUserData();

  const chosenIndex = useRecoilValue($chosenIndex);

  return (
    <>
      {chosenIndex === 0 && (
        <UserProfileView
          originalEmail={originalEmail}
          originalNickname={originalNickname}
          originalPassword={originalPassword}
          nicknameValue={nicknameValue}
          onChangeNickname={onChangeNickname}
        />
      )}
    </>
  );
};