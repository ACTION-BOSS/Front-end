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
  StyledBinIcon,
} from './CommentsStyle';
import { EModalType, useModal } from '../../../../providers';
import { useWindowSize } from 'rooks';

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
  postDone: boolean;
};

export const CommentsView: FC<CommentsViewProps> = ({
  comments,
  nickname,
  onChangeComment,
  handleCreateComment,
  handleDeleteComment,
  body,
  postDone,
}) => {
  const { openModal, closeModal } = useModal();

  const { innerWidth } = useWindowSize();
  const isMobileView = innerWidth! < 576;

  const openDeleteModal = (commentId: string) => {
    openModal(EModalType.POP_UP, {
      title: '작성한 댓글을 삭제할까요?',
      cancelButton: true,
      functionButton: {
        theme: 'pink',
        label: '삭제',
        onClick: () => {
          handleDeleteComment(commentId);
          closeModal();
        },
      },
    });
  };

  return (
    <>
      <StCommentWrapper>
        {comments?.map((comment, index) => (
          <StCommentBox key={comment.id}>
            <StWriterTime>
              <StWriter $isSame={comment.commentOwner}>
                {comment.nickname}
              </StWriter>
              <StTimeContainer>
                <div>{comment.createdDay}</div>
                <div>l</div>
                <div>{comment.createdTime}</div>
                {comment.commentOwner && (
                  <>
                    {isMobileView ? (
                      <div onClick={() => openDeleteModal(comment.id)}>
                        <StyledBinIcon />
                      </div>
                    ) : (
                      <button onClick={() => openDeleteModal(comment.id)}>
                        삭제
                      </button>
                    )}
                  </>
                )}
              </StTimeContainer>
            </StWriterTime>
            <StCommentContent>{comment.content}</StCommentContent>
          </StCommentBox>
        ))}
      </StCommentWrapper>
      <StInputBox $postDone={postDone}>
        <StTextArea>
          <textarea
            placeholder="댓글 작성하기"
            value={body}
            maxLength={200}
            onChange={onChangeComment}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                if (e.shiftKey) return;
                handleCreateComment();
              }
            }}
          />
          <div>{body.length}/200자</div>
        </StTextArea>
        <button onClick={postDone ? undefined : handleCreateComment}>
          작성
        </button>
      </StInputBox>
    </>
  );
};
