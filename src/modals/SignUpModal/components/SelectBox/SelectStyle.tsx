import styled from 'styled-components';
import { Theme } from '../../../../styles';

export const StWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StHiddenLayout = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;

export const StSelectWrapper = styled.div`
  position: relative;
`;

export const StSelectTriggerWrapper = styled.button<{
  $isError: boolean | null;
  $myPage?: boolean;
}>`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  height: ${({ $myPage }) => ($myPage ? `45px` : `42px`)};
  width: 100%;

  border-radius: 8px;
  cursor: pointer;
  outline: none;

  padding: ${({ $myPage }) => ($myPage ? `8px 16px` : `6px 12px`)};

  background-color: ${({ $myPage }) =>
    $myPage ? `${Theme.colors.white}` : `${Theme.colors.blueGray}`};

  color: ${({ $myPage }) =>
    $myPage ? `${Theme.colors.gray7}` : `${Theme.colors.black}`};

  font-size: ${({ $myPage }) =>
    $myPage ? `${Theme.fontSizes.body2}` : `  ${Theme.fontSizes.body3}`};

  font-weight: ${({ $myPage }) =>
    $myPage ? `${Theme.fontWeights.body2}` : `  ${Theme.fontWeights.body3}`};

  border: ${(props) =>
    props.$isError ? `1px solid ${Theme.colors.pink}` : 'none'};
`;

export const StSelectList = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  z-index: 2;
  width: 100%;
  position: absolute;
  overflow: hidden;
  margin-top: 8px;

  :first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    color: ${Theme.colors.gray8};
  }

  :last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const StSelectOption = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${Theme.colors.white};

  color: ${Theme.colors.gray3};

  &:hover {
    background-color: #eee;
  }
`;

export const StPlaceholderText = styled.div`
  color: ${Theme.colors.gray4};
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
`;
