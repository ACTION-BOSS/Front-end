// step들이 들어감
// step에 따라 view를 갈아끼워넣기

import { atom } from 'recoil';
import { EStep } from './type';

export const $stepIndex = atom<EStep>({
  key: 'stepIndex',
  default: EStep.STEP1,
});

export const $isCodeSent = atom<boolean>({
  key: 'isCodeSent',
  default: false,
});

export const $isResetCode = atom<boolean>({
  key: 'isResetCode',
  default: false,
});

export const $isEmailSendFailed = atom<boolean>({
  key: 'isEmailSendFailed',
  default: false,
});

export const $isEmailCodeVerificated = atom<boolean | null>({
  key: 'isEmailCodeVerificated',
  default: null,
});

export const $isTimeOver = atom<boolean>({
  key: 'isTimeOver',
  default: false,
});

export const $isReadyStepTwo = atom<boolean>({
  key: 'isReadyStepTwo',
  default: false,
});

export const $isReadyStepThree = atom<boolean>({
  key: 'isReadyStepTwo',
  default: false,
});

export const $isReadyForSignup = atom<boolean>({
  key: 'isReadyForSignup',
  default: false,
});
