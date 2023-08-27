import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';

export const MainModalContainer = styled.div`
  height: 420px;
  width: 432px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px ${Theme.colors.gray8};
  padding: 16px;
  ${media.mobile`
  height: 240px;
  width:100%;
  padding: 12px 16px;`}
`;

export const MainModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  ${media.mobile`
  margin-bottom: 5px;`}
  .address {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: ${Theme.fontSizes.body3};
    font-weight: ${Theme.fontWeights.body3};
  }
  .xButton {
    cursor: pointer;
  }
`;
export const MainModalMiddle = styled.div<{ $isDone: boolean | undefined }>`
  height: 290px;
  width: 400px;
  overflow: hidden;
  background-color: #d9d9d9;
  border-radius: 12px;
  position: relative;
  ${media.mobile`
  height: 160px;
  width:100%;`}
  .postImg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ $isDone }) =>
      $isDone ? 'rgba(41, 47, 61, 0.40)' : 'none'};
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
  height: 30px;
  width: 60px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(41, 47, 61, 0.2);
  border-radius: 100px;
  font-size: ${Theme.fontSizes.body1};
  font-weight: ${Theme.fontWeights.body1};
  color: ${Theme.colors.gray8};
  ${media.mobile`
  width: 54px;
  height: 26px;
  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};`}
  div {
    padding-right: 4px;
  }
`;
export const MainModalBottom = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile`
  margin-top: 10px;`}
  .title {
    font-size: ${Theme.fontSizes.h3};
    font-weight: ${Theme.fontWeights.h3};
  }
  .nickname {
    font-size: ${Theme.fontSizes.label1};
    font-weight: ${Theme.fontWeights.label1};
    color: ${Theme.colors.black};
  }
`;
