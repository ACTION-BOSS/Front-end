import { useQuery } from '@tanstack/react-query';
import { fetchDetailPageData } from '../../../../api';
import { useParams } from 'react-router-dom';

export const useDetailData = () => {
  const { postId } = useParams();
  const { getDetailPageData } = fetchDetailPageData(postId);

  const { data, isLoading, error } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: getDetailPageData,
  });

  if (isLoading) {
    return {
      isLoading,
      data,
      error,
    };
  }

  const {
    owner,
    agree,
    agreeCount,
    imageUrlList,
    title,
    content,
    createdAt,
    address,
    nickname,
    done,
    doneCount,
  } = data;

  return {
    isLoading,
    error,
    postId,
    owner,
    agree,
    agreeCount,
    imageUrlList,
    title,
    content,
    createdAt,
    address,
    nickname,
    done,
    doneCount,
  };
};
