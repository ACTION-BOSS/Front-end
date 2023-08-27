import styled from 'styled-components';
import { Theme, media } from '../../../styles';

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  padding-left: 14px;
  padding-right: 14px;
`;

export const StLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
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
    border-radius:0;
  `}
`;

export const StChildrenWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 36px;
  padding-right: 36px;
`;

export const StButtonWrapper = styled.div`
  width: 328px;
`;

export const StTransparentDiv = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent;
`;

export const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  height: 95px;
`;
