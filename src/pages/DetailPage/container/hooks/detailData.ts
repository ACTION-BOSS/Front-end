
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFetchDetailPageData } from '../../../../api';
import { useParams } from 'react-router-dom';

export const useDetailData = () => {
  const queryClient = useQueryClient();
  const { postId } = useParams();
  const { getDetailPageData } = useFetchDetailPageData(postId);

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
    comments,
    postDone,
  } = data;

  return {
    data,
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
    comments,
    queryClient,
    postDone,
  };
};
