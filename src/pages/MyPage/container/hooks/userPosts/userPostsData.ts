import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyPagePosts } from '../../../../../api';

export const useUserPostsData = (select: number, page: number) => {
  return useInfiniteQuery(
    ['userPosts', select, page],
    ({ pageParam = page }) => getMyPagePosts(pageParam, select),
    {
      getNextPageParam: (pageData) => {
        return pageData.data.presentPage + 1 < pageData.data.totalPages
          ? pageData.data.presentPage + 1
          : undefined;
      },
      getPreviousPageParam: (pageData) => {
        return pageData.data.presentPage > 0
          ? pageData.data.presentPage - 1
          : undefined;
      },
    },
  );
};
