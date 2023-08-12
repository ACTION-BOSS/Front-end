import styled from 'styled-components';
import { Theme } from '../../../styles';

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  padding-left: 14px;
  padding-right: 14px;
`;

export const StChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 40px;
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
