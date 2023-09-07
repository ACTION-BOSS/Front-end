import {
  StFormContainer,
  StInputContainer,
  StContentContainer,
  StTextContainer,
  StPhotoBoxContainer,
  StIconBox,
  StPhotoContainer,
  StPhotoBox,
  StPhotoText,
  StPhotoBoxInput,
  StCloseButton,
} from './style';
import { HelpIcon } from '../../../../assets';
import { useCreateForm } from '../../container';

export const CreateFormView = () => {
  const {
    post,
    previewImages,
    handleImageUpload,
    removeImage,
    handleTitleChange,
    handleContentChange,
  } = useCreateForm();

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
              placeholder="내용을 작성해주세요 *"
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
            <StPhotoContainer>
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
                          accept="image/jpeg,image/jpg,image/png"
                          multiple
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                        +
                      </StPhotoBoxInput>
                    )}
                  </StPhotoBox>
                ))}
            </StPhotoContainer>
          </StPhotoBoxContainer>
        </StContentContainer>
      </StFormContainer>
    </>
  );
};
