import { useState, useRef, useEffect } from 'react';
import { Coordinates } from '../../type';
import { useMainPostsQuery, useObserver } from '../../hook';

export const useMainPostsLogic = (
  mapCoordinates: Coordinates,
  isDone: boolean,
  handleClickDoneButton: () => void,
) => {
  const [option, setOption] = useState<string>('최신순');
  const [isBottomContente, setIsBottomContente] = useState<boolean>(false);
  const observerElem = useRef<HTMLDivElement>(null);

  const { data, isSuccess, fetchNextPage, hasNextPage, isLoading, isError } =
    useMainPostsQuery(option, isDone, mapCoordinates);

  const handleObserver = useObserver(fetchNextPage, hasNextPage || false);

  const handleClickOptionButton = (option: string) => {
    setOption(option);
  };

  const handleToggleBottomContent = () => {
    setIsBottomContente(!isBottomContente);
  };

  useEffect(() => {
    const element = observerElem.current;
    if (element) {
      const observer = new IntersectionObserver(handleObserver, {
        threshold: 1,
      });
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [handleObserver]);

  const allPosts =
    (isSuccess && data.pages.flatMap((page) => page.data.postList)) || [];

  return {
    option,
    isBottomContente,
    isLoading,
    allPosts,
    isError,
    observerElem,
    handleClickOptionButton,
    handleToggleBottomContent,
    handleClickDoneButton,
  };
};
