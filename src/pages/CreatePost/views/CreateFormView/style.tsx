import styled from 'styled-components';
import { Theme } from '../../../../styles';

export const StFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-bottom: 24px;

  input {
    width: 100%;
    height: 70px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${Theme.colors.gray2};
    padding: 15px;
    padding-right: 80px;
    margin-bottom: 28px;
    font-size: 20px;
    font-weight: ${Theme.fontWeights.h1};
    color: ${Theme.colors.black};

    &::placeholder {
      font-size: 20px;
      font-weight: ${Theme.fontWeights.h1};
      color: ${Theme.colors.gray6};
    }
  }
`;

export const StInputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  div {
    position: absolute;
    font-size: 12px;
    font-weight: ${Theme.fontWeights.label1};
    color: ${Theme.colors.gray7};
    right: 10px;
    top: 40px;
  }
`;

export const StContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  textarea {
    width: 100%;
    height: 55vh;
    min-height: 460px;
    resize: none;
    padding: 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    font-size: ${Theme.fontSizes.body2};
    font-weight: ${Theme.fontWeights.body2};
    color: ${Theme.colors.black};

    &::placeholder {
      font-size: ${Theme.fontSizes.body2};
      font-weight: ${Theme.fontWeights.body2};
      color: ${Theme.colors.gray4};
    }
  }
`;

export const StTextContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  div {
    position: absolute;
    font-size: 12px;
    font-weight: ${Theme.fontWeights.label1};
    color: ${Theme.colors.gray7};
    right: 20px;
    bottom: 20px;
  }
`;

export const StPhotoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 180px;
`;

export const StIconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StPhotoText = styled.div`
  font-size: ${Theme.fontSizes.label1};
  font-weight: ${Theme.fontWeights.label1};
  color: ${Theme.colors.gray7};
`;

export const StCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const StPhotoBox = styled.div<{ image?: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 250;
  width: 100%;
  height: 130px;
  color: transparent;
  background-color: ${Theme.colors.gray1};
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${({ image }) => (image ? '' : '#A9ACB1')};
    color: white;
  }
`;

export const StPhotoBoxInput = styled(StPhotoBox).attrs({ as: 'label' })``;
