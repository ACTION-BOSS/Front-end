import { useState, FC, ChangeEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  StCommentWrapper,
  StCommentBox,
  StWriterTime,
  StWriter,
  StTimeContainer,
  StCommentContent,
  StInputBox,
  StTextArea,
} from './CommentsStyle';
import { EModalType, useModal } from '../../../../providers';
import { useDetailData } from '../../container';
import { createComment, deleteComment } from '../../../../api/commentsApi';

type Comment = {
  id: string;
  nickname: string;
  content: string;
  createdDay: string;
  createdTime: string;
  commentOwner: boolean;
};

type CommentsViewProps = {
  comments: Comment[];
  postId: string | undefined;
  nickname: string;
};

type CreateCommentArgs = {
  postId: string;
  newComment: string;
};

export const CommentsView: FC<CommentsViewProps> = ({
  comments,
  postId,
  nickname,
}) => {
  const { queryClient } = useDetailData();

  const [body, setBody] = useState('');

  const { openModal } = useModal();

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
    if (typeof postId === 'string') {
      createCommentMutation.mutate({ postId, newComment: body });
      setBody('');
    }
  };

  return (
    <>
      <StCommentWrapper>
        {comments?.map((comment) => (
          <StCommentBox key={comment.id}>
            <StWriterTime>
              <StWriter isSame={comment.nickname === nickname}>
                {comment.nickname}
              </StWriter>
              <StTimeContainer>
                <div>{comment.createdDay}</div>
                <div>l</div>
                <div>{comment.createdTime}</div>
                {comment.commentOwner && (
                  <button
                    onClick={() =>
                      openModal(EModalType.POP_UP, {
                        title: '작성한 댓글을 삭제할까요?',
                        cancelButton: true,
                        functionButton: {
                          theme: 'pink',
                          label: '삭제',
                          onClick: () => handleDeleteComment(comment.id),
                        },
                      })
                    }
                  >
                    삭제
                  </button>
                )}
              </StTimeContainer>
            </StWriterTime>
            <StCommentContent>{comment.content}</StCommentContent>
            <hr />
          </StCommentBox>
        ))}
      </StCommentWrapper>
      <StInputBox>
        <StTextArea>
          <textarea
            placeholder="댓글 작성하기"
            value={body}
            maxLength={200}
            onChange={onChangeComment}
          />
          <div>{body.length}/200자</div>
        </StTextArea>
        <button onClick={handleCreateComment}>작성</button>
      </StInputBox>
    </>
  );
};
