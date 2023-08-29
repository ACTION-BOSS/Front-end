import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { EditPostType } from '../type';
import { getAccessToken } from '../../../shared';

export const useEditPost = () => {
  const token = getAccessToken();
  const navigate = useNavigate();
  const { id: stringId } = useParams();
  const id = Number(stringId);
  const [post, setPost] = useState<EditPostType | null>(null);

  const getPostDetail = async (id: number) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/posts/${id}`,
      {
        headers: headers,
      },
    );
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

  const mutation = useMutation(
    () =>
      axios.put(`${process.env.REACT_APP_API_URI}/api/posts/${id}`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        navigate(`/detail/${id}`);
      },
      onError: (error) => {
        console.error('수정 요청 실패:', error);
      },
    },
  );

  return { post, setPost, isLoading, isError, mutation };
};
