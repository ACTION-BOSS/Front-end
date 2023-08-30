import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const OptionButtons = styled.div`
  margin: 15px 30px 20px;
  display: flex;
  height: 35px;
  ${media.tablet`
  margin: 15px 15px 20px;
`}
`;
export const NewlestButton = styled.button<{ $option: string }>`
  flex: 1;
  border-radius: 8px 0px 0px 8px;
  border: none;
  cursor: pointer;

  background-color: ${({ $option }) =>
    $option === '최신순' ? Theme.colors.blueGray : Theme.colors.gray1};
  color: ${({ $option }) =>
    $option === '최신순' ? Theme.colors.blue : Theme.colors.gray3};
  font-size: ${Theme.fontSizes.h3};
  font-weight: ${Theme.fontWeights.h3};
`;
export const AgreeButton = styled.button<{ $option: string }>`
  flex: 1;
  border-radius: 0px 8px 8px 0px;
  border: none;
  cursor: pointer;

  background-color: ${({ $option }) =>
    $option === '불편순' ? Theme.colors.blueGray : Theme.colors.gray1};
  color: ${({ $option }) =>
    $option === '불편순' ? Theme.colors.pink : Theme.colors.gray3};
  font-size: ${Theme.fontSizes.h3};
  font-weight: ${Theme.fontWeights.h3};
`;
