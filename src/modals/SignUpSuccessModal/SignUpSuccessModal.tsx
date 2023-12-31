import { FC } from 'react';
import { SignUpSuccessLayout } from './layout';
import { SignUpSuccessModalContainer } from './container';
import { withConfetti } from '../../shared';

type SignUpSuccessModalProps = {
  showConfetti?: boolean;
};

export const SignUpSuccessModal: FC<SignUpSuccessModalProps> = withConfetti(
  ({}) => {
    return (
      <SignUpSuccessLayout>
        <SignUpSuccessModalContainer />
      </SignUpSuccessLayout>
    );
  },
);
