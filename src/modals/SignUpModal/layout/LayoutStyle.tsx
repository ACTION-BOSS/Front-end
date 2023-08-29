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
    padding-top: 60px;
  `}
`;

export const StBackIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const StCloseIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StyledLogo = styled(LogoSeroSvg)`
  width: 120px;
  height: auto;

  ${media.mobile`
    width: 124px;
`}
`;

export const StLogoText = styled.div`
  display: none;

  ${media.mobile`
  display: block;
  font-size: 15px;
  font-weight: 600;
  padding: 10px;
`}
`;

export const StLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 40px;

  ${media.mobile`
    padding-top: 70px;
  `}
`;

export const SampleLogo = styled.div`
  width: 117px;
  height: 61px;

  background-color: ${Theme.colors.gray1};
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
  height: 100%;
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

export const StButtonWrapper = styled.div`
  width: 328px;
`;

export const StTransparentDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  background-color: transparent;
`;

export const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  height: 95px;
`;
