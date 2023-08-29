import { FC, ReactNode } from 'react';
import {
  StModalWrapper,
  StLogoWrapper,
  StViewWrapper,
  StFooter,
  StButtonWrapper,
  StTransparentDiv,
  StHeader,
  StStepWrapper,
  StLogoText,
  StBackIconWrapper,
  StCloseIconWrapper,
  StyledLogo,
} from './LayoutStyle';
import { ShowStep } from '../components';
import { EStep } from '../type';
import { BackIcon, XButtonIcon } from '../../../assets';
import {
  $isReadyForSignup,
  $isReadyStepThree,
  $isReadyStepTwo,
  $stepIndex,
} from '../state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useSignupModalFormSubmit } from '../container';
import { useModal } from '../../../providers';
import { Button, Pressable } from '../../../shared';

type SignUpLayoutProps = {
  children: ReactNode;
};

export const SignUpLayout: FC<SignUpLayoutProps> = ({ children }) => {
  const [stepIndex, setStepIndex] = useRecoilState($stepIndex);
  const isReadyStepTwo = useRecoilValue($isReadyStepTwo);
  const isReadyStepThree = useRecoilValue($isReadyStepThree);
  const isReadyForSignup = useRecoilValue($isReadyForSignup);
  const { submit } = useSignupModalFormSubmit();
  const { closeModal } = useModal();

  const isReadyNextStep = () => {
    if (stepIndex === EStep.STEP1) {
      return !isReadyStepTwo;
    }

    if (stepIndex === EStep.STEP2) {
      return !isReadyStepThree;
    }

    if (stepIndex === EStep.STEP3) {
      return !isReadyForSignup;
    }
  };

  const handleNextStepButtonClick = () => {
    if (stepIndex === EStep.STEP1) {
      setStepIndex(EStep.STEP2);
    }

    if (stepIndex === EStep.STEP2) {
      setStepIndex(EStep.STEP3);
    }
    if (stepIndex === EStep.STEP3) {
      submit();
    }
  };

  const handleBackIconClick = () => {
    if (stepIndex === EStep.STEP2) {
      setStepIndex(EStep.STEP1);
    }

    if (stepIndex === EStep.STEP3) {
      setStepIndex(EStep.STEP2);
    }
  };

  const handleCloseIconClick = () => {
    closeModal();
  };

  return (
    <StModalWrapper>
      <StHeader>
        {stepIndex === EStep.STEP1 ? (
          <StTransparentDiv />
        ) : (
          <StBackIconWrapper>
            <Pressable onClick={handleBackIconClick}>
              <BackIcon size={24} />
            </Pressable>
          </StBackIconWrapper>
        )}
        <StStepWrapper>
          <StLogoText>회원가입</StLogoText>
          <ShowStep step={stepIndex} />
        </StStepWrapper>
        <StCloseIconWrapper>
          <Pressable onClick={handleCloseIconClick}>
            <XButtonIcon size={24} />
          </Pressable>
        </StCloseIconWrapper>
      </StHeader>

      <StLogoWrapper>
        <StyledLogo />
      </StLogoWrapper>

      <StViewWrapper>{children}</StViewWrapper>

      <StFooter>
        <StButtonWrapper>
          <Button
            label={stepIndex === EStep.STEP3 ? '회원가입 완료' : '다음'}
            $buttonTheme="blue"
            size="large"
            $bold
            onClick={handleNextStepButtonClick}
            disabled={isReadyNextStep()}
          />
        </StButtonWrapper>
      </StFooter>
    </StModalWrapper>
  );
};
