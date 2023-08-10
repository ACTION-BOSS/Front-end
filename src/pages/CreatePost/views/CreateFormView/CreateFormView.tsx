import {
  StFormContainer,
  StContentContainer,
  StPhotoBoxContainer,
  StPhotoBox,
  StPhotoText,
} from './style';

export const CreateFormView = () => {
  return (
    <>
      <StFormContainer>
        <input placeholder="제목을 작성해주세요 *"></input>
        <StContentContainer>
          <textarea placeholder="게시물 내용을 작성해주세요 *"></textarea>
          <StPhotoBoxContainer>
            <StPhotoBox>+</StPhotoBox>
            <StPhotoBox>+</StPhotoBox>
            <StPhotoBox>+</StPhotoBox>
            <StPhotoText>* 최소 한 개의 이미지를 업로드해야 합니다</StPhotoText>
          </StPhotoBoxContainer>
        </StContentContainer>
      </StFormContainer>
    </>
  );
};
