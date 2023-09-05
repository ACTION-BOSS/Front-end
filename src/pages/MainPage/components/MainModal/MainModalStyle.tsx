import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';
import { MyDirectIcon, UncomBigIcon, XButtonBigIcon } from '../../../../assets';

export const MainModalContainer = styled.div`
  height: 420px;
  width: 432px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px rgba(41, 47, 61, 0.25);
  padding: 16px;
  ${media.mobile`
  height: 240px;
  width:100%;
  padding: 12px 16px;
  border-radius: 12px;`}
`;

export const GrayX = styled(XButtonBigIcon)`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  ${media.mobile`
  width: 18px;
  height: 18px;`}
`;

export const Uncom = styled(UncomBigIcon)`
  width: 20px;
  height: 20px;
  ${media.mobile`
  width: 18px;
  height: 18px;`};
`;

export const Direct = styled(MyDirectIcon)`
  width: 24px;
  height: 24px;
  ${media.mobile`
  width: 16px;
  height: 16px;`};
`;

export const MainModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  ${media.mobile`
  margin-bottom: 6px;`}
  .title {
    font-size: ${Theme.fontSizes.h3};
    font-weight: ${Theme.fontWeights.h3};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${media.mobile` 
    font-size: ${Theme.fontSizes.mH2};
    font-weight: ${Theme.fontWeights.mH2};`}
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
  cursor: pointer;
  ${media.mobile`
  height: 160px;
  width:100%;
  border-radius: 8px;`}
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
    object-fit: cover;
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
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);
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
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile`
  margin-top: 10px;`}
  .address {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: ${Theme.fontSizes.body3};
    font-weight: ${Theme.fontWeights.body3};
    ${media.mobile` 
    font-size: ${Theme.fontSizes.mH1};
    font-weight: ${Theme.fontWeights.mH1};
    font-size: 12px; 
    font-weight: 500;`}
  }
  .nickname {
    font-size: ${Theme.fontSizes.label1};
    font-weight: ${Theme.fontWeights.label1};
    color: ${Theme.colors.gray7};
  }
`;
