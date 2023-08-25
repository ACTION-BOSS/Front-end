import { FC, useState } from 'react';
import { Theme } from '../../../../styles';
import { ClearIcon } from '../../../../assets';
import {
  StPhotosWrapper,
  StMainImageWrapper,
  StMainImage,
  StClearIconWrapper,
  StClearText,
  StPreviewImagesWrapper,
  StPreviewWrapper,
  StPreviewImage,
  StNoImages,
  StTitleText,
} from './PhotosViewStyle';
type PhotosViewProps = {
  imageUrlList: string[];
  postDone: boolean;
};

export const PhotosView: FC<PhotosViewProps> = ({ imageUrlList, postDone }) => {
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
      <StMainImageWrapper $postDone={postDone}>
        <StMainImage src={previewImages[selectedImageIndex]} />
        {postDone && (
          <StClearIconWrapper>
            <ClearIcon color={Theme.colors.blueGray} size={100} />
            <StClearText>해결 완료!</StClearText>
          </StClearIconWrapper>
        )}
      </StMainImageWrapper>
      <StPreviewImagesWrapper>
        {previewImages.map((e, i) =>
          e ? (
            <StPreviewWrapper
              key={i}
              $isSelected={selectedImageIndex === i}
              $postDone={postDone}
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
