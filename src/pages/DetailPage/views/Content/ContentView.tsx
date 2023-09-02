import { FC, useState } from 'react';
import {
  StWrapper,
  StTitleWrapper,
  StTitle,
  StWriterInfo,
  StContentWrapper,
  StContentWord,
  StHowManyWrapper,
  StHowManyLetters,
  StyledKebob,
  StKebobIconWrapper,
  StModifyButtonWrapper,
  StyledPencilIcon,
  StRowDiv,
  StRowText,
} from './ContentViewStyle';
import { Theme } from '../../../../styles';
import { BinIcon } from '../../../../assets';
import { useWindowSize } from 'rooks';
import { useDeleteData } from '../../container';
import { EModalType, useModal } from '../../../../providers';
import { useNavigate } from 'react-router';

type ContentViewProps = {
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
  postId?: string;
  owner: boolean;
};

export const ContentView: FC<ContentViewProps> = ({
  title,
  content,
  createdAt,
  nickname,
  postId,
  owner,
}) => {
  const [isModifyButtonOpened, setIsModifyButtonOpened] =
    useState<boolean>(false);
  const { deleteData } = useDeleteData();
  const { openModal } = useModal();
  const navigate = useNavigate();

  const handleClickKebobIcon = () => {
    setIsModifyButtonOpened((prev) => !prev);
  };

  const handleCickDeleteButton = () => {
    deleteData();
  };

  const { innerWidth } = useWindowSize();
  const isMobileView = innerWidth! < 576;

  return (
    <StWrapper>
      <StTitleWrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StTitle>{title}</StTitle>
          {owner && isMobileView && (
            <StKebobIconWrapper onClick={handleClickKebobIcon}>
              <StyledKebob />
              {isModifyButtonOpened && (
                <StModifyButtonWrapper>
                  <StRowDiv onClick={() => navigate(`/edit/${postId}`)}>
                    <StRowText color={Theme.colors.gray7}>수정</StRowText>
                    <StyledPencilIcon />
                  </StRowDiv>
                  <StRowDiv
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
                  >
                    <StRowText color={Theme.colors.pink}>삭제</StRowText>
                    <BinIcon />
                  </StRowDiv>
                </StModifyButtonWrapper>
              )}
            </StKebobIconWrapper>
          )}
        </div>
        <StWriterInfo>
          <div>{createdAt}</div>
          <div>|</div>
          <div>{nickname}</div>
        </StWriterInfo>
      </StTitleWrapper>

      <StContentWrapper>
        <StContentWord>{content}</StContentWord>
        <StHowManyWrapper>
          <StHowManyLetters>{`${content.length}/500자`}</StHowManyLetters>
        </StHowManyWrapper>
      </StContentWrapper>
    </StWrapper>
  );
};
