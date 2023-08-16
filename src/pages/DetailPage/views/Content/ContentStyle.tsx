import styled from 'styled-components';
import { Theme } from '../../../../styles';

export const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  border-bottom: 1px solid ${Theme.colors.gray1};

  margin-bottom: 36px;
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

export const StTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StContentWrapper = styled.div`
  padding: 20px;
  word-wrap: break-word;
`;

export const StContentWord = styled.p`
  align-self: stretch;

  color: ${Theme.colors.gray8};
  font-size: ${Theme.fontSizes.body2};
  font-weight: ${Theme.fontWeights.body2};
  line-height: 26px;
  padding: 4px;
`;

export const StHowManyWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const StHowManyLetters = styled.div`
  padding: 12px;

  color: ${Theme.colors.gray7};
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
`;
