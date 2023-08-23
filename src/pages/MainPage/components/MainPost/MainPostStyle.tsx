import { styled } from 'styled-components';

interface OptionProps {
  isDone: boolean;
}

export const MainPostStyle = styled.div`
  margin: 0 0 30px;
  cursor: pointer;
`;

export const MainPostImg = styled.div<OptionProps>`
  width: 100%;
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  .postImg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.isDone ? 'rgba(41, 47, 61, 0.40)' : 'none'};
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
  font-size: ${(props) => props.theme.fontSizes.body3};
  font-weight: ${(props) => props.theme.fontWeights.body3};
  color: ${(props) => props.theme.colors.gray8};
`;
export const MainPostContent = styled.div`
  padding-top: 10px;
  .title {
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: ${(props) => props.theme.fontWeights.h3};
    line-height: 25px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    font-size: ${(props) => props.theme.fontSizes.label1};
    font-weight: ${(props) => props.theme.fontWeights.label1};
  }
  .address {
    color: #5c5c70;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.theme.colors.gray7};
  }
  .nickname {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.gray3};
  }
`;
