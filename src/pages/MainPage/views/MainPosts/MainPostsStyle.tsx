import styled from 'styled-components';

export const MainPostsConatiner = styled.div`
  width: 330px;
  box-sizing: border-box;
`;
export const MainPostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 10px 0;
  margin: 0 30px;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
  select {
    border: none;
  }
`;

export const MainPosts = styled.div<{ $noPost: boolean }>`
  padding: 0 45px;
  height: ${({ $noPost }) => ($noPost ? '0' : 'calc(100vh - 218px)')};
  overflow-y: auto;
  &::-webkit-scrollbar {
    //스크롤 css
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

export const NoPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;
