import { FC } from 'react';
import styled from 'styled-components';
import { Theme, media } from '../../../../styles';
import { EModalType, useModal } from '../../../../providers';
type NotLoggedInViewProps = {};

export const NotLoggedInView: FC<NotLoggedInViewProps> = ({}) => {
  const { openModal } = useModal();
  return (
    <StViewWrapper>
      <div>
        <StText>
          <p>마이페이지 정보를 </p>
          <p>찾을 수 없습니다</p>
        </StText>
        <StSmallText>
          <div>로그인 상태가 아닌가요?</div>
          <p
            onClick={() => {
              openModal(EModalType.LOGIN);
            }}
          >
            로그인하기
          </p>
        </StSmallText>
      </div>
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
  padding-top: 100px;

  & > :first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  ${media.tablet`
padding-right: 0;
padding-top: 40px;
  `}

  ${media.mobile`
  `}
`;

export const StText = styled.div`
  display: flex;
  text-align: center;
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray4};
  font-size: 40px;
  font-weight: 400;
  line-height: 55px;
  gap: 7px;

  ${media.tablet`

font-size: 35px;
font-weight: 100;
line-height: 30px;
padding-top: 10px;
    `}

  ${media.mobile`
  margin-bottom: 20px;
  flex-direction: column;
 font-size: 23px;
    `}
`;

export const StSmallText = styled(StText)`
  display: flex;
  font-size: 20px;
  color: ${Theme.colors.gray7};
  gap: 14px;

  p {
    display: flex;
    text-decoration: underline;
    cursor: pointer;

    ${media.tablet`
    justify-content: center;
    align-items: center;
    `}

    ${media.mobile`
 font-size: 8px;
    `}
  }

  ${media.tablet`
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
gap: 0px;
      `}

  ${media.mobile`
   font-size: 13px;
      `}
`;
