import { ChangeEvent, FC } from 'react';
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
  handleCreateComment: () => void;
  onChangeComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleDeleteComment: (commentId: string) => void;
  body: string;
};

export const CommentsView: FC<CommentsViewProps> = ({
  comments,
  nickname,
  onChangeComment,
  handleCreateComment,
  handleDeleteComment,
  body,
}) => {
  const { openModal, closeModal } = useModal();

  return (
    <>
      <StCommentWrapper>
        {comments?.map((comment, index) => (
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
                          onClick: () => {
                            handleDeleteComment(comment.id);
                            closeModal();
                          },
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
            {index !== comments.length - 1 && <hr />}
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
          <div>{body.trim().length}/200자</div>
        </StTextArea>
        <button onClick={handleCreateComment}>작성</button>
      </StInputBox>
    </>
  );
};
