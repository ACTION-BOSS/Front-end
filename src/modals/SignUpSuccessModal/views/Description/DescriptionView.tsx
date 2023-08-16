import { FC } from 'react';
import { SIGNUP } from '../../../../assets';
import styled from 'styled-components';
import { Theme } from '../../../../styles';
type DescriptionProps = {};

export const DescriptionView: FC<DescriptionProps> = ({}) => {
  return (
    <StDescriptionWrapper>
      <StLogo src={SIGNUP} />
      <StTextH2>회원가입 완료!</StTextH2>
      <StTextL1>환영합니다 우리동네 행동대장님!</StTextL1>
    </StDescriptionWrapper>
  );
};

const StLogo = styled.img`
  width: 200px;
  padding: 20px;
`;

const StDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StTextH2 = styled.div`
  color: ${Theme.colors.black};
  text-align: center;
  /* H2,button */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: -6px;
`;

const StTextL1 = styled.div`
  color: ${Theme.colors.gray7};
  text-align: center;
  /* L1 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
