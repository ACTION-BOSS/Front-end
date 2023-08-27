import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const NoPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 340px;
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray3};
  font-size: 30px;
  font-weight: 400;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
