import styled from 'styled-components';
import { Theme } from '../../../../styles';

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

export const StSelectTriggerWrapper = styled.button`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  padding: 6px 12px;

  height: 42px;
  width: 153px;

  border-radius: 8px;
  cursor: pointer;

  background-color: ${Theme.colors.blueGray};
  color: ${Theme.colors.black};

  font-size: ${Theme.fontSizes.body3};
  font-weight: ${Theme.fontWeights.body3};

  border: none;
  outline: none;
`;

export const StSelectList = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  z-index: 2;
  background-color: red;
  width: 300px;
  position: absolute;
  overflow: hidden;
`;

export const StSelectOption = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  height: 40px;

  &:hover {
    background-color: #eee;
  }

  :first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  :last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
