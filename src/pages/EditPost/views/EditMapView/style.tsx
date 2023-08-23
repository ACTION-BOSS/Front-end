import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 50vh;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  margin-top: 3vh;
`;

export const StMapText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12%;
  padding: 20px;
  border-radius: 12px;
  background-color: ${Theme.colors.white};
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  color: ${Theme.colors.black};
`;

export const StMapContainer = styled.div`
  width: 100%;
  height: 98%;
  border-radius: 12px;
  position: relative;
`;

export const StAddressContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
export const StIconText = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 5px 0px ${(props) => props.theme.gray8};
  border-radius: 100rem;
  padding: 10px 23px 10px 20px;
  gap: 5px;
  background-color: ${Theme.colors.white};
`;
export const StAddressText = styled.div``;
