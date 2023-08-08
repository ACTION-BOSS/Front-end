import styled from 'styled-components';
import { Theme } from '../../../styles';

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  padding-left: 14px;
  padding-right: 14px;

  background-color: orange;
`;

export const StLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 40px;

  background-color: pink;
`;

export const SampleLogo = styled.div`
  width: 117px;
  height: 61px;

  background-color: ${Theme.colors.gray};
`;

export const StModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 600px;

  border-radius: 12px;
  background-color: ${Theme.colors.white};
  box-shadow: 0px 2px 15px 0px rgba(41, 47, 61, 0.25);
`;

export const StViewWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding-top: 10px;
  padding-bottom: 10px;

  align-items: center;
`;

export const StButtonWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;

  height: 100px;

  background-color: teal;
`;
