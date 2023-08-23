import {
  StFormContainer,
  StInputContainer,
  StContentContainer,
  StTextContainer,
  StPhotoBoxContainer,
  StIconBox,
  StPhotoBox,
  StPhotoText,
  StPhotoBoxInput,
  StCloseButton,
} from './style';
import React, { useState } from 'react';
import { HelpIcon } from '../../../../assets';
import { useRecoilState } from 'recoil';
import { createPostState } from '../../state';

export const CreateFormView = () => {
  const [post, setPost] = useRecoilState(createPostState);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const imagesArray = fileArray.map((file) => URL.createObjectURL(file));

      const newPreviewImages = [...previewImages, ...imagesArray].slice(0, 3);
      const newFiles = [...(post?.images || []), ...fileArray].slice(0, 3);

      setPreviewImages(newPreviewImages);
      setPost({ ...post, images: newFiles });
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...previewImages];
    const updatedImgs = [...post.images];
    updatedImages.splice(index, 1);
    updatedImgs.splice(index, 1);
    setPreviewImages(updatedImages);
    setPost({ ...post, images: updatedImgs });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, content: e.target.value });
  };

  return (
    <>
      <StFormContainer>
        <StInputContainer>
          <input
            placeholder="제목을 작성해주세요 *"
            value={post.title}
            onChange={handleTitleChange}
            maxLength={50}
          ></input>
          <div>{post.title.length}/50자</div>
        </StInputContainer>
        <StContentContainer>
          <StTextContainer>
            <textarea
              placeholder="민원 내용을 작성해주세요 *"
              value={post.content}
              onChange={handleContentChange}
              maxLength={500}
            ></textarea>
            <div>{post.content.length}/500자</div>
          </StTextContainer>
          <StPhotoBoxContainer>
            <StIconBox>
              <HelpIcon />
              <StPhotoText>최소 한 장의 사진을 올려주세요</StPhotoText>
            </StIconBox>

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
