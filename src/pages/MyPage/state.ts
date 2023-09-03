import { atom } from 'recoil';

export const $chosenIndex = atom({
  key: 'chosenIndex',
  default: 0,
});

export const $isCodeSent = atom<boolean>({
  key: 'isCodeSentMyPage',
  default: false,
});

export const $isResetCode = atom<boolean>({
  key: 'isResetCodeMyPage',
  default: false,
});

export const $isEmailSendFailed = atom<boolean>({
  key: 'isEmailSendFailedMyPage',
  default: false,
});

export const $isEmailFormatError = atom<boolean>({
  key: 'isEmailFormatErrorMyPage',
  default: false,
});

export const $isEmailCodeVerificated = atom<boolean | null>({
  key: 'isEmailCodeVerificatedMyPage',
  default: null,
});

export const $isTimeOver = atom<boolean>({
  key: 'isTimeOverMyPage',
  default: false,
});
