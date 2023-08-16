import { FC } from 'react';
import {
  StContentWord,
  StContentWrapper,
  StHowManyLetters,
  StHowManyWrapper,
  StTitle,
  StTitleWrapper,
  StWrapper,
  StWriterInfo,
} from './ContentStyle';

type ContentViewProps = {};

const contents = 'titletitletitletitletitle';

export const ContentView: FC<ContentViewProps> = ({}) => {
  return (
    <StWrapper>
      <StTitleWrapper>
        <StTitle>게시물 제목</StTitle>
        <StWriterInfo>
          <div>2023.03.11</div>
          <div>|</div>
          <div>작성자</div>
        </StWriterInfo>
      </StTitleWrapper>

      <StContentWrapper>
        <StContentWord>{contents}</StContentWord>
        <StHowManyWrapper>
          <StHowManyLetters>{`${
            contents.trim().length
          }/500자`}</StHowManyLetters>
        </StHowManyWrapper>
      </StContentWrapper>
    </StWrapper>
  );
};
