import { FC } from 'react';
import { SignUpLayout } from './layout';
import { SignupModalContainer, useSignupModalForm } from './container';
import { FormProvider } from 'react-hook-form';

type SignUpModalProps = {};

export const SignUpModal: FC<SignUpModalProps> = ({}) => {
  const { form } = useSignupModalForm();
  return (
    <FormProvider {...form}>
      <SignUpLayout>
        <SignupModalContainer />
      </SignUpLayout>
    </FormProvider>
  );
};
