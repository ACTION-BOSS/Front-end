import styled from 'styled-components';
import { Theme } from '../../../../styles';

export const StFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-bottom: 24px;

  input {
    height: 70px;
    border: none;
    border-bottom: 1px solid black;
    padding: 15px;
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

export const StContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  textarea {
    width: 80%;
    height: 55vh;
    resize: none;
    padding: 20px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    word-spacing: -4px;
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

export const StPhotoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 180px;
`;

// export const StPhotoBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: transparent;
//   font-size: 60px;
//   width: 100%;
//   height: 130px;
//   background-color: #e0e3eb;
//   border-radius: 8px;

//   &:hover {
//     background-color: #a3acc2;
//     color: white;
//   }
// `;

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
  width: 100%;
  height: 130px;
  color: transparent;
  background-color: #e0e3eb;
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  &:hover {
    background-color: ${({ image }) => (image ? '' : '#a3acc2')};
    color: white;
  }
`;

export const StPhotoBoxInput = styled(StPhotoBox).attrs({ as: 'label' })``;
