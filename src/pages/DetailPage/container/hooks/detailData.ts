import { useQuery } from '@tanstack/react-query';
import { fetchDetailPageData } from '../../../../api';

export const useDetailData = (id: number) => {
  const { getDetailPageData } = fetchDetailPageData(id);

  const { data, isLoading, error } = useQuery({
    queryKey: ['postDetail', id],
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
