import { FC } from 'react';
import styled from 'styled-components';
import { Theme, media } from '../../../../styles';
import { EModalType, useModal } from '../../../../providers';
type NotLoggedInViewProps = {};

export const NotLoggedInView: FC<NotLoggedInViewProps> = ({}) => {
  const { openModal } = useModal();
  return (
    <StViewWrapper>
      <StText>마이페이지 정보를 찾을 수 없습니다</StText>
      <StSmallText>
        로그인 상태가 아닌가요?
        <p
          onClick={() => {
            openModal(EModalType.LOGIN);
          }}
        >
          로그인하기
        </p>
      </StSmallText>
    </StViewWrapper>
  );
};

export const StViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-right: 15vw;
`;

export const StText = styled.div`
  display: flex;
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray4};
  font-size: 40px;
  font-weight: 400;
  line-height: 55px;

  ${media.tablet`

    `}

  ${media.mobile`
 
    `}
`;

export const StSmallText = styled(StText)`
  font-size: 20px;
  color: ${Theme.colors.gray7};
  gap: 14px;

  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;
