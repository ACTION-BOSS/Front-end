import { atom, selector } from 'recoil';

export const $tokenState = atom<string | null>({
  key: 'tokenState',
  default: localStorage.getItem('token'),
});

export const $tokenExpiryState = atom<Date | null>({
  key: 'tokenExpiryState',
  default: null,
});

export const $isLoggedInState = selector<boolean>({
  key: 'isLoggedInState',
  get: ({ get }) => {
    const token = get($tokenState);
    const expiryDate = get($tokenExpiryState);

    if (!token || !expiryDate) return false;

    return new Date() < expiryDate;
  },
});
