import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StMapText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 62px;
  background-color: ${Theme.colors.blueGray};
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  color: ${Theme.colors.black};
`;

export const StMapContainer = styled.div`
  width: 60vw;
  height: 40vh;
  border-radius: 12px;
`;
