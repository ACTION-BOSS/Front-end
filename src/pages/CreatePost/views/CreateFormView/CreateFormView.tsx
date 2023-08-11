import {
  StFormContainer,
  StContentContainer,
  StPhotoBoxContainer,
  StPhotoBox,
  StPhotoText,
  StPhotoBoxInput,
  StCloseButton,
} from './style';
import React, { useState } from 'react';

export const CreateFormView = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imagesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setPreviewImages(imagesArray.slice(0, 3));
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...previewImages];
    updatedImages.splice(index, 1);
    setPreviewImages(updatedImages);
  };

  return (
    <>
      <StFormContainer>
        <input placeholder="제목을 작성해주세요 *"></input>
        <StContentContainer>
          <textarea placeholder="민원 내용을 작성해주세요 *"></textarea>
          <StPhotoBoxContainer>
            <StPhotoText>최소 한 장의 사진을 올려주세요</StPhotoText>

            {Array(3)
              .fill(null)
              .map((_, index) => (
                <StPhotoBox key={index} image={previewImages[index]}>
                  {previewImages[index] && (
                    <StCloseButton onClick={() => removeImage(index)}>
                      X
                    </StCloseButton>
                  )}
                  {!previewImages[index] && (
                    <StPhotoBoxInput>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                      />
                      +
                    </StPhotoBoxInput>
                  )}
                </StPhotoBox>
              ))}
          </StPhotoBoxContainer>
        </StContentContainer>
      </StFormContainer>
    </>
  );
};
