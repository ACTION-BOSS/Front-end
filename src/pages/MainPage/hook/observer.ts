import { useCallback } from 'react';

export const useObserver = (
  handleNextPage: () => void,
  hasNextPage: boolean = false, //변수 초기에 undefined일수 있어 초기값 지정
) => {
  return useCallback(
    ([target]: IntersectionObserverEntry[]) => {
      if (target.isIntersecting && hasNextPage) {
        handleNextPage();
      }
    },
    [handleNextPage, hasNextPage],
  );
};
