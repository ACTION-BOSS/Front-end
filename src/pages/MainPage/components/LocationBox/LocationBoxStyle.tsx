import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const LocationBox = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 40px;
  background: ${Theme.colors.white};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  font-size: ${Theme.fontSizes.body2};
  font-weight: ${Theme.fontWeights.body2};
`;
