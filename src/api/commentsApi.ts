import { api } from './api';

type CreateCommentArgs = {
  postId: string;
  newComment: string;
};

export const deleteComment = async (commentId: string): Promise<void> => {
  try {
    const res = await api.delete(`/posts/comments/${commentId}`);

    // axios({
    //   url: `${process.env.REACT_APP_API_URI}/api/posts/comments/${commentId}`,
    //   method: 'DELETE',
    //   headers: {
    //     Access: `Bearer ${token}`,
    //   },
    // });

    if (res.status === 200) {
      // console.log('댓글 삭제 성공');
    }
  } catch (err) {
    // console.log(err);
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

    // axios({
    //   url: `${process.env.REACT_APP_API_URI}/api/posts/${postId}`,
    //   method: 'POST',
    //   headers: {
    //     Access: `Bearer ${token}`,
    //   },
    //   data: { content: newComment },
    // });

    if (res.status === 201) {
      // console.log('댓글 작성 성공');
    }
  } catch (err) {
    // console.log(err);
  }
};
