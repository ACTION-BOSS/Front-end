import {
  StSecondIllustSection,
  StContainer,
  StTextContainer,
  StTitle,
  StContent,
  StManhole,
} from './style';
import { MANHOLE } from '../../../../assets';

export const SecondIllustSection = () => {
  return (
    <StSecondIllustSection>
      <StContainer>
        <StManhole src={MANHOLE} alt="swing" />
        <StTextContainer>
          <StTitle>{`모두의 안전을 위한
          동네 지킴이`}</StTitle>
          <StContent>
            주의가 필요한 일을 발견했나요? 행동대장으로 알려주세요!
          </StContent>
          <StContent>살기좋은 우리 동네 내 손으로 만들어요</StContent>
        </StTextContainer>
      </StContainer>
    </StSecondIllustSection>
  );
};
