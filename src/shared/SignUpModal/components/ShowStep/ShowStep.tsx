import { FC } from 'react';
import {
  StColumnDiv,
  StRoundStep,
  StLetterStep,
  StLineWrapper,
  StLine,
  StWrapper,
} from './ShowStepStyle';
import { EStep } from '../../type';
import React from 'react';

type ShowStepProps = {
  step: EStep;
};

export const ShowStep: FC<ShowStepProps> = ({ step = EStep.STEP1 }) => {
  //   const stepNumber = Number(step.at(-1));

  let stepNumber = 3;

  const progressByStep = (currentStep: number) => {
    return stepNumber >= currentStep;
  };

  const STEPS_ARRAY = Array(Object.values(EStep).length)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <StWrapper>
      {STEPS_ARRAY.map((step, i) => {
        return (
          <React.Fragment key={i}>
            <StColumnDiv>
              <StRoundStep $onProgress={progressByStep(step)} />
              <StLetterStep $onProgress={progressByStep(step)}>
                {step}단계
              </StLetterStep>
            </StColumnDiv>
            {i !== STEPS_ARRAY.length - 1 && (
              <StLineWrapper>
                <StLine $onProgress={progressByStep(step + 1)} />
              </StLineWrapper>
            )}
          </React.Fragment>
        );
      })}
    </StWrapper>
  );
};
