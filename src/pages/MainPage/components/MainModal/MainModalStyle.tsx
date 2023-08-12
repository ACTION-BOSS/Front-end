import { styled } from 'styled-components';

export const MainModalContainer = styled.div`
  height: 420px;
  width: 432px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px ${(props) => props.theme.colors.gray8};
  padding: 16px;
`;

export const MainModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  .address {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: ${(props) => props.theme.fontSizes.body3};
    font-weight: ${(props) => props.theme.fontWeights.body3};
  }
  .xButton {
    cursor: pointer;
  }
`;
export const MainModalMiddle = styled.div`
  height: 290px;
  width: 400px;
  overflow: hidden;
  background-color: #d9d9d9;
  border-radius: 12px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const UnLike = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0px 10px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(41, 47, 61, 0.2);
  border-radius: 100px;
  font-size: ${(props) => props.theme.fontSizes.body1};
  font-weight: ${(props) => props.theme.fontWeights.body1};
  color: ${(props) => props.theme.colors.gray8};
`;
export const MainModalBottom = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: ${(props) => props.theme.fontWeights.h3};
  }
  .nickname {
    font-size: ${(props) => props.theme.fontSizes.label1};
    font-weight: ${(props) => props.theme.fontWeights.label1};
    color: ${(props) => props.theme.colors.black};
  }
`;
