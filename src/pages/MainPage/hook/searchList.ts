import { useQuery } from '@tanstack/react-query';
import { getSearchList } from '../../../api';

export const useSearchListQuery = (keyword: string) => {
  return useQuery(['searchList', keyword], () => getSearchList(keyword));
};
