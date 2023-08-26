import { FC, useState } from 'react';
import { EmailPasswordView, KakaoLoginView } from '../views';
import { useLoginModalFormController, useLoginModalFormSubmit } from './hooks';

type LoginModalContainerProps = {};

export const LoginModalContainer: FC<LoginModalContainerProps> = ({}) => {
  const {
    emailIdValue,
    onChangeEmailId,
    onChangeEmailDomain,
    emailDomainValue,
    onChangePassword,
    passwordValue,
  } = useLoginModalFormController();
  const [isSelfTypeMode, setIsSelfTypeMode] = useState<boolean>(false);
  const setToSelfTypeMode = () => {
    setIsSelfTypeMode(true);
  };

  const { submit } = useLoginModalFormSubmit();
  const handlePressLoginButton = () => {
    submit();
  };

  return (
    <>
      <EmailPasswordView
        emailIdValue={emailIdValue}
        onChangeEmailId={onChangeEmailId}
        emailDomainValue={emailDomainValue}
        onChangeEmailDomain={onChangeEmailDomain}
        isSelfTypeMode={isSelfTypeMode}
        setToSelfTypeMode={setToSelfTypeMode}
        onChangePassword={onChangePassword}
        passwordValue={passwordValue}
        onPressLoginButton={handlePressLoginButton}
      />
      <KakaoLoginView />
    </>
  );
};
