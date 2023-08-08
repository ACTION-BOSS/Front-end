import { styled } from 'styled-components';

export const MainPostStyle = styled.div`
  padding: 15px 0;
`;

export const MainPostImg = styled.div`
  width: 100%;
  height: 180px;
  background-color: #d9d9d9;
  border-radius: 12px;
`;
export const MainPostContent = styled.div`
  padding-top: 15px;
  .title {
    font-weight: bold;
  }
  .address {
    padding-top: 10px;
    color: #5c5c70;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    .box {
      width: 20px;
      height: 20px;
      background-color: #d9d9d9;
    }
  }
`;
