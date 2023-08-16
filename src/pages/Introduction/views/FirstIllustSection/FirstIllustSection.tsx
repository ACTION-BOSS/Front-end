import {
  StFirstIllustSection,
  StGradation,
  StContainer,
  StTextContainer,
  StTitle,
  StContent,
  StSwing,
} from './style';
import { SWING } from '../../../../assets';

export const FirstIllustSection = () => {
  return (
    <StFirstIllustSection>
      <StGradation></StGradation>
      <StContainer>
        <StTextContainer>
          <StTitle>불편함을 알리는 사이렌</StTitle>
          <StContent>고장난 시설물을 그냥 두기 마음에 걸린다면?</StContent>
          <StContent>
            나의 신고로 모두의 불편함이 빨리 개선될 수 있어요
          </StContent>
        </StTextContainer>
        <StSwing src={SWING} alt="swing" />
      </StContainer>
    </StFirstIllustSection>
  );
};
