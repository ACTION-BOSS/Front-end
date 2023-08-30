import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const MainPostStyle = styled.div`
  margin: 0 0 30px;
  cursor: pointer;
  ${media.tablet`
  width: calc((100% / 3) - 14px);
  height: 260px;
  margin: 5px 0;
`}
  ${media.mobile`
  width: 100%;
  height: 130px;
  display: flex;
  margin: 10px 0;
  gap: 25px;
`}
`;

export const MainPostImg = styled.div<{ $isDone: boolean }>`
  width: 100%;
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  ${media.mobile`
    flex: 6;
    height: 130px;
`}
  .postImg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ $isDone }) =>
      $isDone ? `${Theme.colors.deem}` : 'none'};
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const UnLike = styled.div`
  position: absolute;
  top: 9px;
  right: 9px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45px;
  padding: 2px 6px;
  background-color: white;
  box-shadow: 0px 0px 2px 0px rgba(41, 47, 61, 0.25);
  border-radius: 100px;
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};
  color: ${Theme.colors.gray8};
`;
export const MainPostContent = styled.div`
  padding-top: 10px;
  overflow: hidden;
  ${media.mobile`
  flex:6;
  position: relative;
`}
  .title {
    font-size: ${Theme.fontSizes.h3};
    font-weight: ${Theme.fontWeights.h3};
    line-height: 25px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    font-size: ${Theme.fontSizes.label1};
    font-weight: ${Theme.fontWeights.label1};
    ${media.mobile`
      flex-direction: column;
    `}
  }
  .address {
    color: #5c5c70;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${Theme.colors.gray7};
  }
  .nickname {
    display: flex;
    align-items: center;
    color: ${Theme.colors.gray3};
    ${media.mobile`
      flex-direction: column;
      position: absolute;
      bottom: 6px;
      right: 0px;
    `}
  }
`;
