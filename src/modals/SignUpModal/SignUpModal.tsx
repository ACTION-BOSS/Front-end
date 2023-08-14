import { FC } from 'react';
import { SignUpLayout } from './layout';
import { SignupModalContainer, useSignupModalForm } from './container';
import { FormProvider } from 'react-hook-form';
import { RecoilProvider } from '../../providers';

type SignUpModalProps = {};

export const SignUpModal: FC<SignUpModalProps> = ({}) => {
  const { form } = useSignupModalForm();
  return (
    <RecoilProvider>
      <FormProvider {...form}>
        <SignUpLayout>
          <SignupModalContainer />
        </SignUpLayout>
      </FormProvider>
    </RecoilProvider>
  );
};
