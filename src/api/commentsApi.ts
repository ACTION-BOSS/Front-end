import axios from 'axios';
import { getAccessToken } from '../shared';

type CreateCommentArgs = {
  postId: string;
  newComment: string;
};

const token = getAccessToken();

export const deleteComment = async (commentId: string): Promise<void> => {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_URI}/api/posts/comments/${commentId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
    const res = await axios({
      url: `${process.env.REACT_APP_API_URI}/api/posts/${postId}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { content: newComment },
    });

    if (res.status === 201) {
      // console.log('댓글 작성 성공');
    }
  } catch (err) {
    // console.log(err);
  }
};
