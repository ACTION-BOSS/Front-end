import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StMapBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 56vh;
  background-color: #e0e3eb;
`;

export const StContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StMapText = styled.div`
  font-size: ${Theme.fontSizes.body1};
  font-weight: ${Theme.fontWeights.body1};
  color: ${Theme.colors.black};
  margin-bottom: 15px;
`;

export const StMapContainer = styled.div`
  width: 60vw;
  height: 40vh;
  border-radius: 12px;
`;
