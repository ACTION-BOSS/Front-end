import { atom } from 'recoil';

export const $chosenIndex = atom<number>({
  key: 'chosenIndex',
  default: 0,
});

export const $isNicknameFocused = atom<boolean>({
  key: 'isNicknameFocused',
  default: false,
});

export const $isNicknameChangeFinished = atom<boolean>({
  key: 'isNicknameChangeFinished',
  default: false,
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

export const $isPasswordValid = atom<boolean>({
  key: 'isPasswordValid',
  default: false,
});
