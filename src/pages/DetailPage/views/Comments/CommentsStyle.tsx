import { styled } from 'styled-components';
import { Theme } from '../../../../styles';

export const StCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: calc(120px * 5);
  background-color: #f0f1f5;
  border-radius: 12px;
  margin-top: 32px;
  overflow-y: auto;
`;

export const StCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 0px 20px;

  hr {
    width: 100%;
    border: 1px solid ${Theme.colors.gray1};
  }
`;

export const StWriterTime = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StWriter = styled.div<{ isSame: boolean }>`
  color: ${(props) => (props.isSame ? Theme.colors.blue : Theme.colors.black)};
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};
`;

export const StTimeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  div {
    color: ${Theme.colors.gray6};
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.body4};
  }

  button {
    background-color: ${Theme.colors.white};
    font-size: 15px;
    font-weight: 600;
    color: #ff005e;
    width: 60px;
    height: 30px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`;

export const StCommentContent = styled.div`
  color: ${Theme.colors.gray8};
  font-weight: ${Theme.fontWeights.body2};
  font-size: ${Theme.fontSizes.body2};
  margin-bottom: 32px;
`;

export const StInputBox = styled.div`
  display: flex;
  gap: 19px;
  align-items: center;
  height: 97px;
  margin-top: 32px;

  button {
    background-color: ${Theme.colors.white};
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.h2};
    color: #ff005e;
    width: 129px;
    height: 100%;
    border-radius: 8px;
    border: 2px solid #ff005e;
    cursor: pointer;
  }
`;

export const StTextArea = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  textarea {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid ${Theme.colors.gray1};
    outline: none;
    resize: none;
    padding: 20px;
    color: ${Theme.colors.gray6};
    font-weight: ${Theme.fontWeights.body2};
    font-size: ${Theme.fontSizes.body2};

    &::placeholder {
      font-size: ${Theme.fontSizes.body2};
      font-weight: 100;
      color: ${Theme.colors.gray6};
    }
  }

  div {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: ${Theme.colors.gray6};
    font-weight: ${Theme.fontWeights.body4};
    font-size: ${Theme.fontSizes.body4};
  }
`;
