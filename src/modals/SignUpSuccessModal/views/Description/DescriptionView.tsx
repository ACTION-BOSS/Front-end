import { FC } from 'react';
import { SIGNUP } from '../../../../assets';
import styled from 'styled-components';
import { Theme, media } from '../../../../styles';
type DescriptionProps = {};

export const DescriptionView: FC<DescriptionProps> = ({}) => {
  return (
    <StDescriptionWrapper>
      <StLogo src={SIGNUP} />
      <StTextWrapper>
        <StTextH2>회원가입 완료!</StTextH2>
        <StTextL1>환영합니다 우리동네 행동대장님!</StTextL1>
      </StTextWrapper>
    </StDescriptionWrapper>
  );
};

const StLogo = styled.img`
  width: 200px;
  padding: 20px;

  ${media.mobile`
    width: 30vh;
  `}
`;

const StDescriptionWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 30px;
`;

const StTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StTextH2 = styled.div`
  color: ${Theme.colors.black};
  text-align: center;
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  line-height: normal;
  margin-bottom: -6px;
`;

const StTextL1 = styled.div`
  color: ${Theme.colors.gray7};
  text-align: center;

  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
  line-height: normal;
`;
