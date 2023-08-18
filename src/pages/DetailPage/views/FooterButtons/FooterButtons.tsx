import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../shared';
import { Theme } from '../../../../styles';
import { CompletedButton } from '../../components';
import { useDetailData } from '../../container';
import { EModalType, useModal } from '../../../../providers';
import { useNavigate } from 'react-router-dom';
type FooterButtonsProps = {};

export const FooterButtons: FC<FooterButtonsProps> = ({}) => {
  const { data, isLoading, error } = useDetailData();
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  if (isLoading) {
    return <></>;
  }

  const { owner, postId } = data;

  return (
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
                openModal(EModalType.DELETE, {
                  postId: postId,
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
  );
};

export const StBottomButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: absolute;

  padding-bottom: 127px;

  bottom: -260px;
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
