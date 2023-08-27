import styled from 'styled-components';
import { Theme, media } from '../../../../styles';

export const MainPostsConatiner = styled.div<{ $isBottomContente: boolean }>`
  width: 330px;
  height: calc(100vh - 225px);
  box-sizing: border-box;
  ${media.tablet`
width:100%;
display: hidden;
background-color: ${Theme.colors.white};
z-index:999;
padding-top: 15px;
position:absolute;
  `}
  ${({ $isBottomContente }) =>
    !$isBottomContente &&
    media.tablet`
  position: fixed;
  height:83px;
  bottom: 0;
  transition: height 0.2s ease-in-out;
  `};
  ${({ $isBottomContente }) =>
    $isBottomContente &&
    media.tablet`
    transition: height 0.2s ease-in-out;
    position: fixed;
    bottom:139px;;
  `};
`;
export const MainPostsShortLine = styled.div`
  width: 100%;
  display: none;
  padding-bottom: 17px;
  ${media.tablet`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  div {
    width: 80px;
    height: 6px;
    background-color: ${Theme.colors.gray2};
    border-radius: 10px;
  }
`}
`;
export const MainPostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 10px 0;
  margin: 0 30px;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  font-size: ${Theme.fontSizes.body2};
  font-weight: ${Theme.fontWeights.body2};
  select {
    border: none;
  }
  ${media.tablet`
  padding: 0 0 10px 0;
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
  margin: 0 15px;
`}
`;
export const MainPostsContent = styled.div<{ $isBottomContente: boolean }>`
  height: 100%;
  ${({ $isBottomContente }) =>
    !$isBottomContente &&
    media.tablet`
    display:none;
  `};
`;
export const NoPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;
export const MainPosts = styled.div`
  padding: 0 45px;
  height: 100%;
  overflow-y: auto;
  background-color: ${Theme.colors.white};
  &::-webkit-scrollbar {
    width: 10px;
    ${media.tablet`
    display: none;
    `}
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #848484;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #84848447;
    flex-wrap: nowrap;
  }
  ${media.tablet`
  display:flex;
  flex-wrap: wrap;
  gap: 20px;
  align-content: flex-start;
  padding: 0 18px;
`}
  ${media.mobile`
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0px;
  padding: 0 15px;
`}
`;
