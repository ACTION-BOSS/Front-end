import { FC, useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { LoginModalContainer, useLoginModalForm } from './container';
import { LoginLayout } from './layout';
import { useSetRecoilState } from 'recoil';
import { $isVerificationFailed } from './state';
import { RecoilProvider } from '../../providers';

type LoginModalProps = {};

export const LoginModal: FC<LoginModalProps> = ({}) => {
  const { form } = useLoginModalForm();
  const setIsVerificationFailed = useSetRecoilState($isVerificationFailed);

  useEffect(() => {
    return () => {
      setIsVerificationFailed(null);
    };
  }, []);

  return (
    <RecoilProvider>
      <FormProvider {...form}>
        <LoginLayout>
          <LoginModalContainer />
        </LoginLayout>
      </FormProvider>
    </RecoilProvider>
  );
};
