import { api } from './api';

type CreateCommentArgs = {
  postId: string;
  newComment: string;
};

export const deleteComment = async (commentId: string): Promise<void> => {
  try {
    const res = await api.delete(`/posts/comments/${commentId}`);

    if (res.status === 200) {
    }
  } catch (err) {
    console.log(err);
  }
};

export const createComment = async ({
  postId,
  newComment,
}: CreateCommentArgs): Promise<void> => {
  try {
    const res = await api.post(`/posts/${postId}`, {
      content: newComment,
    });

    if (res.status === 201) {
    }
  } catch (err) {
    console.log(err);
  }
};
