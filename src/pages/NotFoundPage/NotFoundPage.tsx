import { FC } from 'react';
import { NOTFOUNDBG } from '../../assets';
import {
  StWrapper,
  StContentWrapper,
  StText,
  StNotfoundImageWrapper,
  StNotfoundImage,
  StText2,
} from './NotFoundStyle';
type NotFoundPageProps = {};

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
  return (
    <StWrapper>
      <StContentWrapper>
        <StText>요청하신 페이지를</StText>
        <StNotfoundImageWrapper>
          <StNotfoundImage src={NOTFOUNDBG} />
        </StNotfoundImageWrapper>
        <StText2>찾을 수 없습니다</StText2>
      </StContentWrapper>
    </StWrapper>
  );
};
