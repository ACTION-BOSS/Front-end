import styled from 'styled-components';
import { Theme, media } from '../../../../styles';

export const StClearIconWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StClearText = styled.div`
  color: ${Theme.colors.blueGray};
  font-size: 25px;
  font-weight: ${Theme.fontWeights.h1};
  text-align: center;
`;

export const StPhotosWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 32px;

  max-height: 560px;
  margin-bottom: 48.5px;

  ${media.tablet`
  flex-direction: column;
  max-height: 800px;
  aspect-ratio: 1;
  `}

  ${media.mobile`
  width: 100%;
  gap: 18px;
  flex-direction: column;
  max-height: 500px;
  margin-bottom: 20px;
`}
`;

export const StMainImageWrapper = styled.div<{ $postDone: boolean }>`
  position: relative;
  display: flex;
  flex: 3;
  overflow: hidden;
  border-radius: 12px;
  object-fit: cover;

  ${({ $postDone }) =>
    $postDone &&
    `
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--deem, rgba(41, 47, 61, 0.40));
    pointer-events: none;
  }
`}

  ${media.tablet`
  width: 100%;
  height: 100px;
`}

  ${media.mobile`
    background-color: white;
    border-radius: 0px;
    max-height: 281px;
    flex: 3;
  `}
`;

export const StMainImage = styled.img`
  display: flex;
  flex: 1;
  background-color: black;
  background: ${Theme.colors.deem};

  width: 100%;
  height: 100%;

  ${media.tablet`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  `}

  ${media.mobile`
  width: 100%;
  height: 100%;
  border-radius: 0;
`}
`;

export const StPreviewImage = styled.img`
  display: flex;
  flex: 1;
  width: 100%;

  background-color: black;
  object-fit: center;

  ${media.mobile`
  background-color: white;
  border-radius: 0px;
`}
`;

export const StPreviewImagesWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 18px;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet`
  width: 100%;
  flex-direction: row;
  `}

  ${media.mobile`
  flex-direction: row;
  padding-left:24px;
  padding-right:24px;
  gap:9px;
  width: 100%;
  max-height: 100px;
`}
`;

export const StPreviewWrapper = styled.div<{
  $isSelected: boolean;
  $postDone: boolean;
}>`
  display: flex;
  position: relative;
  aspect-ratio: 900/648;

  border: 4px solid transparent;
  background: none;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    `
    border: 4px solid #FF005E;
    background: rgba(41, 47, 61, 0.40);
    box-shadow: 0 0 8px var(--red-pink, #FF005E);
  `}

  ${({ $postDone }) =>
    $postDone &&
    `
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--deem, rgba(41, 47, 61, 0.40));
      pointer-events: none;
    }
  `}

  ${media.tablet`
    width: 250px;
  `}

  ${media.mobile`
    width: 150px;
  `}

  @media (max-width: 576px) {
    ${({ $isSelected }) =>
      $isSelected &&
      `
        border: 2px solid #FF005E;
        box-shadow: 0 0 4px var(--red-pink, #FF005E);
    `}
  }
`;

export const StNoImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 900/648;

  margin: 2px;
  border-radius: 8px;
  background: rgba(41, 47, 61, 0.4);

  overflow: hidden;

  ${media.tablet`
  width: 250px;
  `}

  ${media.mobile`
  width: 150px;
`}
`;

export const StTitleText = styled.div`
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray1};

  font-size: 36px;
  letter-spacing: 1px;

  ${media.tablet`
  font-size: 28px;
  `}

  ${media.mobile`
  font-size: 20px;
`}
`;
