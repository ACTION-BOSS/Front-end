import styled from 'styled-components';
import { Theme } from '../../../styles';

export const StHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 14px;
  padding-right: 14px;
  align-self: flex-end;
`;

export const StTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

export const StTextL1 = styled.div`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${Theme.colors.gray4};
`;

export const StTextL3 = styled.div`
  color: ${Theme.colors.gray7};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`;

//
export const StLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 30px;
  padding-bottom: 30px;
`;

export const StChildrenWrapper = styled(StLogoWrapper)``;

//
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

//
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

//
export const StFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  height: 95px;
`;
