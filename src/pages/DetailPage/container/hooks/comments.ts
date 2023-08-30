import { ChangeEvent, useState } from 'react';
import { useDetailData } from './detailData';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { createComment, deleteComment } from '../../../../api';
import { getAccessToken, useToast } from '../../../../shared';

type CreateCommentArgs = {
  postId: string;
  newComment: string;
};

export const useComments = () => {
  const { queryClient } = useDetailData();
  const { postId } = useParams();
  const [body, setBody] = useState('');
  const { openToast } = useToast();
  const accessToken = getAccessToken();

  const isNotLoggedIn = !accessToken;

  const deleteCommentMutation = useMutation<void, unknown, string>(
    deleteComment,
    {
      onSuccess: () => {
        queryClient?.invalidateQueries(['postDetail', postId]);
      },
    },
  );

  const createCommentMutation = useMutation<void, unknown, CreateCommentArgs>(
    createComment,
    {
      onSuccess: () => {
        queryClient?.invalidateQueries(['postDetail', postId]);
      },
    },
  );

  const onChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleDeleteComment = (commentId: string) => {
    deleteCommentMutation.mutate(commentId);
  };

  const handleCreateComment = () => {
    if (isNotLoggedIn) {
      openToast('로그인 후 댓글 작성이 가능합니다');
      return;
    } else {
      if (body.trim().length === 0) {
        openToast('1글자 이상의 댓글을 작성해주세요');
        return;
      }
      if (typeof postId === 'string') {
        createCommentMutation.mutate({ postId, newComment: body });
        setBody('');
      }
    }
  };

  return {
    onChangeComment,
    handleCreateComment,
    handleDeleteComment,
    body,
  };
};
