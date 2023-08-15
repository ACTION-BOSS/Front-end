import { styled } from 'styled-components';

export const PostSkeletonStyle = styled.div`
  padding: 15px 0;
`;
export const MainPostImg = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #d9d9d9;
  border-radius: 12px;
`;
export const MainPostContent = styled.div`
  padding-top: 5px;
  .title {
    height: 25px;
    width: 100%;
    background-color: #d9d9d9;
    border-radius: 5px;
  }
  .content {
    display: flex;
    height: 20px;
    width: 100%;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #d9d9d9;
  }
`;
