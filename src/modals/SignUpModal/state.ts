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

export const $isEmailFormatError = atom<boolean>({
  key: 'isEmailFormatError',
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
  key: 'isReadyStepThree',
  default: false,
});

export const $isReadyForSignup = atom<boolean | null>({
  key: 'isReadyForSignup',
  default: false,
});

export const $selectedOptionIndex = atom<number>({
  key: 'selectedOptionIndex',
  default: -1,
});

export const $isPasswordVerified = atom<boolean | null>({
  key: 'isPasswordVerified',
  default: null,
});

export const $isVerified = atom<boolean | null>({
  key: 'isVerified',
  default: null,
});
