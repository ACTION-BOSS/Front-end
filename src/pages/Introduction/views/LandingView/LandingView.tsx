import {
  StLandingView,
  StLogoFlag,
  StBIName,
  StSlogan,
  StText,
  StNavButton,
  StMapBox,
} from './style';
import { LOGO_FLAG } from '../../../../assets';
import { useNavigate } from 'react-router-dom';

export const LandingView = () => {
  const navigate = useNavigate();

  const onClickToMain = () => {
    navigate('/main');
  };

  return (
    <StLandingView>
      <StLogoFlag src={LOGO_FLAG} alt="flag" />
      <StBIName>행동머장</StBIName>
      <StSlogan>행복한 동네를 위한 대화의 장소</StSlogan>
      <StText>당신의 행동으로 채우는 우리 동네, 우리 지도</StText>
      <StText className="wide">어쩌면 우리가 더 안전하고 행복해질 지도</StText>
      <StNavButton onClick={onClickToMain}>동네민원 보러가기</StNavButton>
      <StMapBox />
    </StLandingView>
  );
};
