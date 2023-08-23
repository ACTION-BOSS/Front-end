import styled from 'styled-components';

interface OptionProps {
  active: string;
}

interface isDoneProps {
  isDone: boolean;
}

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
export const OptionButton = styled.div<OptionProps>`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.active === 'true'
        ? props.theme.colors.gray3
        : props.theme.colors.gray4};
  font-size: ${(props) => props.theme.fontSizes.body3};
  color: ${(props) =>
    props.active === 'true'
      ? props.theme.colors.gray3
      : props.theme.colors.gray4};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0px 0px 2px 0px ${(props) => props.theme.colors.gray8};
  cursor: pointer;
`;
export const OptionList = styled.ul<OptionProps>`
  position: fixed;
  right: 30px;
  background-color: white;
  display: ${(props) => (props.active === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 95px;
  padding: 8px;
  margin: 8px 0;
  gap: 14px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.3);
  font-size: ${(props) => props.theme.fontSizes.body3};
  z-index: 999;
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
`;
export const IsDoneButton = styled.div<isDoneProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 13px 0;
  margin: 10px 30px 16px;
  border-radius: 12px;
  box-shadow: 0px 2px 5px 0px rgba(41, 47, 61, 0.3);
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeights.h3};
  color: ${(props) =>
    props.isDone ? props.theme.colors.white : props.theme.colors.black};
  background-color: ${(props) =>
    props.isDone ? props.theme.colors.blue : props.theme.colors.white};
`;
export const MainPosts = styled.div`
  padding: 0 45px;
  height: calc(100vh - 228px);
  overflow-y: auto;
  /* &::-webkit-scrollbar {
    display: none;
  } */
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
