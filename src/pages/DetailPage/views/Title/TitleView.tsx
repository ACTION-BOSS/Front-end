import { FC } from 'react';
import { StTitle, StWrapper, StWriterInfo } from './TitleStyle';
type TitleViewProps = {};

export const TitleView: FC<TitleViewProps> = ({}) => {
  return (
    <StWrapper>
      <StTitle>게시물 제목</StTitle>
      <StWriterInfo>
        <div>작성일</div>
        <div>|</div>
        <div>작성자</div>
      </StWriterInfo>
    </StWrapper>
  );
};
