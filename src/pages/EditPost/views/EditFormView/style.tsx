import styled from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin-bottom: 24px;

  ${media.tablet`
  width: 88vw;
  `}

  ${media.mobile`
  width: 91vw;
  `}

  input {
    width: 100%;
    height: 61px;
    border: none;
    outline: none;
    border-bottom: 1px solid ${Theme.colors.gray2};
    padding: 15px;
    padding-right: 80px;
    margin-bottom: 28px;
    font-size: 25px;
    font-weight: ${Theme.fontWeights.h1};
    color: ${Theme.colors.black};

    &::placeholder {
      font-size: 25px;
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

  ${media.tablet`
 flex-direction: column;
`}

  ${media.mobile`

`}

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

    ${media.tablet`
 height: 381px;
`}

    ${media.mobile`
height: 255px;
  `}


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
  min-width: 180px;

  ${media.tablet`
 flex-direction: column-reverse;
`}

  ${media.mobile`

`}
`;

export const StIconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;

  ${media.tablet`
 margin: 15px 0 0 0;
`}

  ${media.mobile`

`}
`;

export const StPhotoText = styled.div`
  font-size: 11px;
  font-weight: ${Theme.fontWeights.label1};
  color: ${Theme.colors.gray7};
`;

export const StPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.tablet`
 flex-direction: row;
`}

  ${media.mobile`

`}
`;

export const StPhotoBox = styled.div<{ image?: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: ${Theme.colors.gray8};
  opacity: ${({ image }) => (image ? '1' : '0.4')};
  background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  ${media.tablet`
 height: 165px;
`}

  ${media.mobile`
height: 78px;
`}
`;

export const StTitleText = styled.div`
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray1};

  font-size: 26px;
  letter-spacing: 1px;

  ${media.tablet`
 display: none;
`}
`;
