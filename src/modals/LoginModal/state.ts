import { atom } from 'recoil';

export const $isVerificationFailed = atom<boolean | null>({
  key: 'isVerificationFailed',
  default: null,
});
