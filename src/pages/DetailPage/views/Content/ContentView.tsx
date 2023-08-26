import { FC } from 'react';
import {
  StWrapper,
  StTitleWrapper,
  StTitle,
  StWriterInfo,
  StContentWrapper,
  StContentWord,
  StHowManyWrapper,
  StHowManyLetters,
} from './ContentViewStyle';

type ContentViewProps = {
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
};

export const ContentView: FC<ContentViewProps> = ({
  title,
  content,
  createdAt,
  nickname,
}) => {
  return (
    <StWrapper>
      <StTitleWrapper>
        <StTitle>{title}</StTitle>
        <StWriterInfo>
          <div>{createdAt}</div>
          <div>|</div>
          <div>{nickname}</div>
        </StWriterInfo>
      </StTitleWrapper>

      <StContentWrapper>
        <StContentWord>{content}</StContentWord>
        <StHowManyWrapper>
          <StHowManyLetters>{`${
            content.trim().length
          }/500자`}</StHowManyLetters>
        </StHowManyWrapper>
      </StContentWrapper>
    </StWrapper>
  );
};
