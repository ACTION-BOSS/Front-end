import { FC } from 'react';
import styled from 'styled-components';
import { useDeleteData, useDetailData } from '../../container';
import { EModalType, useModal } from '../../../../providers';
import { useNavigate, useParams } from 'react-router-dom';
import { CompletedButton } from '../../components';
import { Button } from '../../../../shared';
import { Theme } from '../../../../styles';
type FooterButtonsProps = {};

export const FooterButtons: FC<FooterButtonsProps> = ({}) => {
  const { postId } = useParams();
  const { isLoading, error, owner, postDone } = useDetailData();
  const { openModal } = useModal();
  const navigate = useNavigate();
  const { deleteData } = useDeleteData();
  const handleCickDeleteButton = () => {
    deleteData();
  };

  if (isLoading || error) {
    return <></>;
  }

  return !postDone ? (
    <StBottomButtonWrapper>
      <StButtonsWrapper>
        {owner && (
          <>
            <Button
              label="삭제"
              $buttonTheme="emptyPink"
              size="mediumLong"
              fontSize={Theme.fontSizes.h2}
              onClick={() =>
                openModal(EModalType.POP_UP, {
                  title: '작성한 게시물을 삭제할까요?',
                  cancelButton: true,
                  functionButton: {
                    theme: 'pink',
                    label: '삭제',
                    onClick: handleCickDeleteButton,
                  },
                })
              }
            />
            <Button
              label="수정"
              $buttonTheme="blue"
              size="mediumLong"
              fontSize={Theme.fontSizes.h2}
              onClick={() => navigate(`/edit/${postId}`)}
            />
          </>
        )}
      </StButtonsWrapper>
      <CompletedButton />
    </StBottomButtonWrapper>
  ) : (
    <StBottomButtonWrapper $postDone={postDone} />
  );
};

export const StBottomButtonWrapper = styled.div<{ $postDone?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;

  padding-bottom: 127px;

  bottom: ${({ $postDone }) => ($postDone ? '-100px' : '-260px')};
  right: 4px;
`;

export const StButtonsWrapper = styled.div`
  display: flex;
  width: 240px;
  height: 56px;
  padding-left: 12px;
  gap: 12px;

  @media (max-width: 650px) {
  }
`;
