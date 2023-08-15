import styled from 'styled-components';
import { Theme } from '../../../../styles';

export const StWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  border-bottom: 1.5px solid ${Theme.colors.gray1};

  margin-bottom: 18px;
`;

export const StTitle = styled.div`
  padding: 20px;

  color: ${Theme.colors.black};
  font-size: ${Theme.fontSizes.h1};
  font-weight: ${Theme.fontWeights.h1};
`;

export const StWriterInfo = styled.div`
  display: flex;
  align-items: center;

  color: ${Theme.colors.gray6};
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.body4};

  padding: 10px 20px 0px 20px;
  gap: 10px;
`;
