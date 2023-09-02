import { FC, useState } from 'react';
import { UserProfileView } from '../views';
import { useGetUserData, useNicknameValidation } from './hooks';
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
    emailIdValue,
    onChangeEmailId,
    onChangeEmailDomain,
    emailDomainValue,
  } = useGetUserData();
  const { handleChangeInput, verification, text } = useNicknameValidation();
  const chosenIndex = useRecoilValue($chosenIndex);

  const [isSelfTypeMode, setIsSelfTypeMode] = useState<boolean>(false);
  const setToSelfTypeMode = () => {
    setIsSelfTypeMode(true);
  };
  const isVerificationFailed = true;

  return (
    <>
      {chosenIndex === 0 && (
        <UserProfileView
          originalEmail={originalEmail}
          originalNickname={originalNickname}
          originalPassword={originalPassword}
          nicknameValue={nicknameValue}
          onChangeNickname={onChangeNickname}
          handleChangeInput={handleChangeInput}
          verification={verification}
          text={text}
          isSelfTypeMode={isSelfTypeMode}
          isVerificationFailed={isVerificationFailed}
          setToSelfTypeMode={setToSelfTypeMode}
          emailIdValue={emailIdValue}
          onChangeEmailId={onChangeEmailId}
          emailDomainValue={emailDomainValue}
          onChangeEmailDomain={onChangeEmailDomain}
        />
      )}
    </>
  );
};
