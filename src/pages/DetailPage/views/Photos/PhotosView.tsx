import { FC, useState } from 'react';
import { styled } from 'styled-components';
import { Theme } from '../../../../styles';
type PhotosViewProps = {
  imageUrlList: string[];
};

export const PhotosView: FC<PhotosViewProps> = ({ imageUrlList }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleClickImage = (i: number) => {
    setSelectedImageIndex(i);
  };

  const previewImages = Array(3)
    .fill(0)
    .map((e, i) => {
      return imageUrlList[i] || e;
    });

  return (
    <StPhotosWrapper>
      <StMainImageWrapper>
        <StMainImage src={previewImages[selectedImageIndex]} />
      </StMainImageWrapper>
      <StPreviewImagesWrapper>
        {previewImages.map((e, i) =>
          e ? (
            <StPreviewWrapper
              key={i}
              $isSelected={selectedImageIndex === i}
              onClick={() => {
                handleClickImage(i);
              }}
            >
              <StPreviewImage src={e} />
            </StPreviewWrapper>
          ) : (
            <StNoImages key={i}>
              <StTitleText>행동대장</StTitleText>
            </StNoImages>
          ),
        )}
      </StPreviewImagesWrapper>
    </StPhotosWrapper>
  );
};

export const StPhotosWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 32px;

  max-height: 560px;
  margin-bottom: 48.5px;

  @media (max-width: 650px) {
    flex-direction: column;

    padding-left: 36px;
    padding-right: 36px;
  }
`;

export const StMainImageWrapper = styled.div`
  display: flex;
  flex: 3;
  overflow: hidden;
  border-radius: 12px;

  @media (max-width: 650px) {
  }
`;

export const StMainImage = styled.img`
  display: flex;
  flex: 1;
  background-color: black;

  width: 100%;
  height: 100%;

  @media (max-width: 650px) {
    aspect-ratio: 900/648;
  }
`;

export const StPreviewImage = styled.img`
  display: flex;
  flex: 1;
  width: 100%;

  background-color: black;
  object-fit: center;
`;

export const StPreviewImagesWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 18px;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const StPreviewWrapper = styled.div<{
  $isSelected: boolean;
}>`
  display: flex;
  aspect-ratio: 900/648;

  border: ${(props) =>
    props.$isSelected
      ? `2px solid ${Theme.colors.white}`
      : '2px solid transparent'};
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.$isSelected
      ? `0px 0px 8px 0px #FF005E`
      : ' 0px 0px 6px 0px rgba(41, 47, 61, 0.3)'};

  overflow: hidden;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 150px;
  }
`;

export const StNoImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 900/648;

  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(41, 47, 61, 0.4);

  overflow: hidden;

  @media (max-width: 650px) {
    width: 150px;
  }
`;

export const StTitleText = styled.div`
  font-family: 'GilbeotTG';
  color: ${Theme.colors.gray1};

  font-size: 26px;
  letter-spacing: 1px;
`;
