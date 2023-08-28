import { styled } from 'styled-components';
import { media } from '../../../styles';

export const MainContainer = styled.div`
  margin-top: 85px;
  width: 100%;
  ${media.mobile`
  margin-top: 68px;
`}
`;
