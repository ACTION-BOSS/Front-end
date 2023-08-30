import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const NoPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray3};
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 150px;
  ${media.mobile`
  flex-direction: row;
  font-size: 22px;
  margin-bottom: 100px;
`}
  img {
    width: 200px;
    height: 340px;
    object-fit: contain;
    ${media.mobile`
    width: 125px;
    height: 164px;
  `}
  }
`;
