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
`;

export const StMainMapIcon = styled.div`
  z-index: 2;
  position: absolute;
  top: 15px;
  right: 15px;
`;
