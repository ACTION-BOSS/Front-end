import { FC, useState } from 'react';
import { styled } from 'styled-components';
import { MANHOLE, SKYLINE, SWING } from '../../../../assets';
import { Theme } from '../../../../styles';
type PhotosViewProps = {};

const previewImages = [MANHOLE, SWING, SKYLINE];

export const PhotosView: FC<PhotosViewProps> = ({}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleClickImage = (i: number) => {
    setSelectedImageIndex(i);
  };

  return (
    <StPhotosWrapper>
      <StMainImageWrapper>
        <StMainImage src={previewImages[selectedImageIndex]} />
      </StMainImageWrapper>
      <StPreviewImagesWrapper>
        {previewImages.map((e, i) => {
          return (
            <StPreviewWrapper
              key={i}
              $isSelected={selectedImageIndex === i}
              onClick={() => {
                handleClickImage(i);
              }}
            >
              <StPreviewImage src={e} />
            </StPreviewWrapper>
          );
        })}
      </StPreviewImagesWrapper>
    </StPhotosWrapper>
  );
};

export const StPhotosWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 18px;

  max-height: 500px;
  margin-bottom: 48.5px;

  @media (max-width: 650px) {
    flex-direction: column;

    padding-left: 36px;
    padding-right: 36px;
  }
`;

export const StMainImageWrapper = styled.div`
  display: flex;
  flex: 1;

  overflow: hidden;

  border-radius: 12px;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);

  @media (max-width: 650px) {
  }
`;

export const StMainImage = styled.img`
  width: 100%;
  aspect-ratio: 900/648;

  object-fit: center;

  @media (max-width: 650px) {
    aspect-ratio: 900/648;
  }
`;

export const StPreviewImage = styled.img`
  width: 100%;
  height: auto;

  background-color: white;
  object-fit: center;
`;

export const StPreviewImagesWrapper = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;

  width: 185px;

  @media (max-width: 650px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const StPreviewWrapper = styled.div<{
  $isSelected: boolean;
}>`
  display: flex;
  width: 100%;
  height: 135px;

  border: ${(props) =>
    props.$isSelected
      ? `4px solid ${Theme.colors.pink}`
      : '4px solid transparent'};
  border-radius: 8px;
  box-shadow: 0px 0px 6px 0px rgba(41, 47, 61, 0.3);

  overflow: hidden;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 150px;
  }
`;
