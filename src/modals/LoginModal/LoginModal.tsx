import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { LoginModalContainer, useLoginModalForm } from './container';
import { LoginLayout } from './layout';

type LoginModalProps = {};

export const LoginModal: FC<LoginModalProps> = ({}) => {
  const { form } = useLoginModalForm();
  return (
    <FormProvider {...form}>
      <LoginLayout>
        <LoginModalContainer />
      </LoginLayout>
    </FormProvider>
  );
};
