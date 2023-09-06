import { useInfiniteQuery } from '@tanstack/react-query';
import { getMyPagePosts } from '../../../../../api';
import { getAccessToken } from '../../../../../shared';

export const useUserPostsData = (select: number, page: number) => {
  const accessToken = getAccessToken();
  const isLogin = !!accessToken;
  return useInfiniteQuery(
    ['userPosts', select, page],
    ({ pageParam = page }) => getMyPagePosts(pageParam, select),
    {
      enabled: isLogin,
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
