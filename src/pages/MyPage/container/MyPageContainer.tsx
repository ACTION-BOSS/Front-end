import { FC, useState } from 'react';
import { UserProfileView, NotLoggedInView, UserPostsView } from '../views';
import {
  useChangeNickname,
  useChangePassword,
  useDeleteUserAccount,
  useGetUserData,
  useMyPageFormController,
  useNicknameValidation,
  usePasswordValidation,
  useSendEmailVerification,
  useVerificationCode,
} from './hooks';
import { useRecoilValue } from 'recoil';
import { $chosenIndex } from '../state';

type MyPageContainerProps = {};

export const MyPageContainer: FC<MyPageContainerProps> = ({}) => {
  const {
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
  } = useGetUserData();
  const {
    passwordValue,
    onChangePassword,
    passwordVerificationValue,
    onChangePasswordVerification,
  } = useMyPageFormController();
  const { handleChangeInput, verification, validationLabelText } =
    useNicknameValidation();
  const { changeNickName } = useChangeNickname(refetchUserData);
  const { changePassword } = useChangePassword(refetchUserData);

  const { onCodeSendButtonClick } = useSendEmailVerification();
  const chosenIndex = useRecoilValue($chosenIndex);
  const {
    inputCode,
    handleInputChange,
    isInputFilled,
    onEmailCodeAuthenticationButtonClick,
    reSendEmail,
  } = useVerificationCode(refetchUserData);

  const {
    handleChangePassword,
    isPasswordVerified,
    isVerified,
    verificationInputErrorText,
  } = usePasswordValidation();

  const { handleDeleteButtonClick } = useDeleteUserAccount();

  const [isSelfTypeMode, setIsSelfTypeMode] = useState<boolean>(false);
  const setToSelfTypeMode = () => {
    setIsSelfTypeMode(true);
  };

  if (isLoading || error) {
    return (
      <>
        <NotLoggedInView />
      </>
    );
  }

  return (
    <>
      {chosenIndex === 0 && (
        <UserProfileView
          originalEmail={originalEmail}
          originalNickname={originalNickname}
          nicknameValue={nicknameValue}
          onChangeNickname={onChangeNickname}
          handleChangeInput={handleChangeInput}
          verification={verification}
          validationLabelText={validationLabelText}
          isSelfTypeMode={isSelfTypeMode}
          setToSelfTypeMode={setToSelfTypeMode}
          emailIdValue={emailIdValue}
          onChangeEmailId={onChangeEmailId}
          emailDomainValue={emailDomainValue}
          onChangeEmailDomain={onChangeEmailDomain}
          changeNickName={changeNickName}
          onCodeSendButtonClick={onCodeSendButtonClick}
          inputCode={inputCode}
          handleInputChange={handleInputChange}
          isInputFilled={isInputFilled}
          reSendEmail={reSendEmail}
          onEmailCodeAuthenticationButtonClick={
            onEmailCodeAuthenticationButtonClick
          }
          passwordValue={passwordValue}
          onChangePassword={onChangePassword}
          passwordVerificationValue={passwordVerificationValue}
          onChangePasswordVerification={onChangePasswordVerification}
          handleChangePassword={handleChangePassword}
          isPasswordVerified={isPasswordVerified}
          isVerified={isVerified}
          verificationInputErrorText={verificationInputErrorText}
          handleDeleteButtonClick={handleDeleteButtonClick}
          changePassword={changePassword}
        />
      )}
      {chosenIndex !== 0 && <UserPostsView />}
    </>
  );
};
