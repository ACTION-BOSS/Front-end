import { FC } from 'react';
import { SignUpSuccessLayout } from './layout';

import { SignUpSuccessModalContainer } from './container';

type SignUpSuccessModalProps = {};

export const SignUpSuccessModal: FC<SignUpSuccessModalProps> = ({}) => {
  return (
    <SignUpSuccessLayout>
      <SignUpSuccessModalContainer />
    </SignUpSuccessLayout>
  );
};
