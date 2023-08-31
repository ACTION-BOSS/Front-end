import { styled } from 'styled-components';
import { Theme, media } from '../../../../styles';
import { BinIcon } from '../../../../assets';

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
  padding-left: 20px;
  padding-right: 20px;

  ${media.mobile`
    background-color: white;
    margin-top: 24px;;
  `}
`;

export const StCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 0px 20px;
  border-bottom: 1px solid ${Theme.colors.gray1};

  &:last-child {
    border-bottom: none;
  }

  ${media.mobile`
    padding: 20px 0px;
    width: 100%;
    
  `}
`;

export const StWriterTime = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StWriter = styled.div<{ $isSame: boolean }>`
  color: ${(props) => (props.$isSame ? Theme.colors.blue : Theme.colors.black)};
  font-size: ${Theme.fontSizes.h2};
  font-weight: ${Theme.fontWeights.h2};

  ${media.mobile`
  font-size : ${Theme.fontSizes.mBody1};
  font-weight : ${Theme.fontWeights.mBody1};
  `}
`;

export const StTimeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  ${media.mobile`
  gap: 6px;
  `}

  div {
    color: ${Theme.colors.gray6};
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.body4};

    ${media.mobile`
    font-size : ${Theme.fontSizes.mL1};
    font-weight : ${Theme.fontWeights.mL1};
    `}
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
  margin-top: 8px;
  word-wrap: break-word;
  white-space: pre-line;

  ${media.mobile`
  font-size : ${Theme.fontSizes.mBody2};
  font-weight : ${Theme.fontWeights.mBody2};
  color: ${Theme.colors.gray7};
  `}
`;

export const StInputBox = styled.div<{ $postDone: boolean }>`
  display: flex;
  gap: 19px;
  align-items: center;
  height: 97px;
  margin-top: 32px;

  button {
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.h2};
    color: #ff005e;
    width: 129px;
    height: 100%;
    border-radius: 8px;
    border: 2px solid #ff005e;
    cursor: ${({ $postDone }) => ($postDone ? `default` : `pointer`)};

    background-color: ${({ $postDone }) =>
      $postDone ? `${Theme.colors.gray2}` : `${Theme.colors.white}`};
  }

  ${media.mobile`
    height: 68px;
    margin-top: 0px;
  `}
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

      ${media.mobile`
      font-size : ${Theme.fontSizes.mL1};
      font-weight : ${Theme.fontWeights.mL1};
      color: ${Theme.colors.gray7};
      `}
    }

    ${media.mobile`
      font-size : ${Theme.fontSizes.mL1};
      font-weight : ${Theme.fontWeights.mL1};
      color: ${Theme.colors.gray7};
      height: 65px;
    `}
  }

  div {
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: ${Theme.colors.gray6};
    font-weight: ${Theme.fontWeights.body4};
    font-size: ${Theme.fontSizes.body4};

    ${media.mobile`
    font-size : ${Theme.fontSizes.mL1};
    font-weight : ${Theme.fontWeights.mL1};
    color: ${Theme.colors.gray7};
    `}
  }
`;

export const StyledBinIcon = styled(BinIcon)`
  width: 18px;
  height: auto;
  cursor: pointer;
`;
