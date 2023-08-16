import { useQuery } from '@tanstack/react-query';
import { fetchDetailPageData } from '../../../../api';

export const useDetailData = () => {
  const { getDetailPageData, currentPageId } = fetchDetailPageData();

  const { data, isLoading, error } = useQuery({
    queryKey: ['postDetail', currentPageId],
    queryFn: getDetailPageData,
  });

  if (isLoading) {
    return {
      isLoading,
      data,
      error,
    };
  }

  return { data, isLoading, error };
};
