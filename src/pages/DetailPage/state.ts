import { atomFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'isDoneAlerted',
  storage: sessionStorage,
});

export const $isDoneAlertedFamily = atomFamily({
  key: 'isDoneAlertedFamily',
  default: false,
  effects_UNSTABLE: (postId) => [
    ({ setSelf, onSet }) => {
      const storedValue = sessionStorage.getItem(
        `isDoneAlertedFamily_${String(postId)}`,
      );
      if (storedValue != null) {
        setSelf(JSON.parse(storedValue));
      }

      onSet((newValue) => {
        sessionStorage.setItem(
          `isDoneAlertedFamily_${String(postId)}`,
          JSON.stringify(newValue),
        );
      });
    },
  ],
});
