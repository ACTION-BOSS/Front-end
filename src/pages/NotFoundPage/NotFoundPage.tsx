import { FC } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../styles';
import { NOTFOUNDBG } from '../../assets';
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

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Theme.colors.blue};
`;

const StContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
  margin-top: 20px;
`;

const StNotfoundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StNotfoundImageWrapper = styled.div`
  display: flex;
  width: 18vw;
  height: 42vh;
  aspect-ratio: 18/42;
`;

const StText = styled.div`
  display: flex;
  font-family: 'GilbeotTG';
  color: ${Theme.colors.white};
  font-size: 70px;
  font-weight: 400;
  line-height: 55px;
`;

const StText2 = styled(StText)`
  margin-left: -44px;
`;
