import { useInfiniteQuery } from '@tanstack/react-query';
import { getSidebarPosts } from '../../../api';
import { Coordinates } from '../type';

export const useMainPostsQuery = (
  option: string,
  isDone: boolean,
  mapCoordinates: Coordinates,
) => {
  return useInfiniteQuery(
    ['sideBarPosts', option, isDone, mapCoordinates],
    ({ pageParam = 0 }) =>
      getSidebarPosts(pageParam, option, isDone, mapCoordinates),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.presentPage < lastPage.data.totalPage
          ? lastPage.data.presentPage + 1
          : null;
      },
    },
  );
};
