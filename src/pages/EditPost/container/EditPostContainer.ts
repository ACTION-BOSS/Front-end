import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { EditPostType } from '../type';
import { getAccessToken } from '../../../shared';
import { api } from '../../../api';

export const useEditPost = () => {
  const token = getAccessToken();
  const navigate = useNavigate();
  const { id: stringId } = useParams();
  const id = Number(stringId);
  const [post, setPost] = useState<EditPostType | null>(null);

  const getPostDetail = async (id: number) => {
    // const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

    const response = await api.get(`/posts/${id}`);
    return response.data.data;
  };

  const { data, isError, isLoading } = useQuery(['postDetail', id], () =>
    getPostDetail(id),
  );

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  const mutation = useMutation(() => api.put(`/posts/${id}`, post), {
    onSuccess: () => {
      navigate(`/detail/${id}`);
    },
    onError: (error) => {
      console.error('수정 요청 실패:', error);
    },
  });

  return { post, setPost, isLoading, isError, mutation };
};
