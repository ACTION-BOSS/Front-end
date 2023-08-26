import { styled } from 'styled-components';
import { media } from '../../../styles';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${media.tablet`
flex-direction: column;
position: relative;`}
`;
