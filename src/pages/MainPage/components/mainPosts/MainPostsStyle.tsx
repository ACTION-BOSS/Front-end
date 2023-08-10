import styled from 'styled-components';

export const MainPostsConatiner = styled.div`
  width: 330px;
  box-sizing: border-box;
`;
export const MainPostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 15px 0;
  margin: 0 30px;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  select {
    border: none;
  }
`;
export const OptionButton = styled.div`
  width: 70px;
  height: 30px;
  font-size: ${(props) => props.theme.fontSizes.body3};
  color: ${(props) => props.theme.colors.gray3};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 16px;
    height: 16px;
    color: red;
  }
`;
export const MainPosts = styled.div`
  padding: 0 45px;
  height: calc(100vh - 145px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #848484;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #84848447;
  }
`;
