import { FC, ReactNode } from 'react';
import {
  StModalWrapper,
  StHeader,
  StChildrenWrapper,
  StViewWrapper,
  StFooter,
  StButtonWrapper,
  StTransparentDiv,
} from './LayoutStyle';
import { ShowStep } from '../components';
import { EStep } from '../type';
import { Button } from '../../Button';
import { LOGO_SERO } from '../../../assets';
import { BackIcon, XButtonIcon } from '../../../assets/icon';
import { $isReadyStepTwo, $stepIndex } from '../state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Pressable } from '../../Pressable/Pressable';

type SignUpLayoutProps = {
  children: ReactNode;
};

export const SignUpLayout: FC<SignUpLayoutProps> = ({ children }) => {
  const [stepIndex, setStepIndex] = useRecoilState($stepIndex);
  const isReadyStepTwo = useRecoilValue($isReadyStepTwo);

  console.log('다음스텝 레디?', isReadyStepTwo);

  const isReadyNextStep = () => {
    if (stepIndex === EStep.STEP1) {
      return !isReadyStepTwo;
    }

    if (stepIndex === EStep.STEP2) {
      return true;
    }
  };

  const handleNextStepButtonClick = () => {
    if (stepIndex === EStep.STEP1) {
      setStepIndex(EStep.STEP2);
    }
  };

  const handleBackIconClick = () => {
    if (stepIndex === EStep.STEP2) {
      setStepIndex(EStep.STEP1);
    }
  };

  return (
    <StModalWrapper>
      <StHeader>
        {stepIndex === EStep.STEP1 ? (
          <StTransparentDiv />
        ) : (
          <Pressable onClick={handleBackIconClick}>
            <BackIcon size={24} />
          </Pressable>
        )}
        <ShowStep step={stepIndex} />
        <Pressable>
          <XButtonIcon size={24} />
        </Pressable>
      </StHeader>

      <StChildrenWrapper>
        <img src={LOGO_SERO} />
      </StChildrenWrapper>

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
