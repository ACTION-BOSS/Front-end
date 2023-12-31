import styled from 'styled-components';
import { Theme, media } from '../../../styles';
import { LogoSeroSvg } from '../../../assets';

export const StHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  padding-top: 20px;
  padding-left: 14px;
  padding-right: 14px;

  ${media.mobile`
  width: 100%;
  padding-top: 43px;
  padding-bottom: 43px;
  `}
`;

export const StyledLogo = styled(LogoSeroSvg)`
  width: 120px;
  height: auto;

  ${media.mobile`
    width: 168px;
`}
`;

export const StLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 30px;
  padding-bottom: 30px;
`;

export const StChildrenWrapper = styled(StLogoWrapper)`
  padding-left: 36px;
  padding-right: 36px;

  ${media.mobile`
  `}
`;

export const StModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 600px;

  border-radius: 12px;
  background-color: ${Theme.colors.white};
  box-shadow: 0px 2px 15px 0px rgba(41, 47, 61, 0.25);

  overflow: hidden;

  ${media.mobile`
  width: 100%;
  height: 100vh;

  border-radius: 0;
`}
`;

export const StViewWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 36px;
  padding-right: 36px;

  align-items: center;
`;

export const StLogoText = styled.div`
  display: none;

  ${media.mobile`
  display: block;
  font-size: 15px;
  font-weight: 600;
`}
`;

export const StXButtonWrapper = styled.div`
  position: absolute;

  top: 20px;
  right: 20px;

  ${media.mobile`
  top: 45%;
  transform: translateY(-50%);
  `}
`;
