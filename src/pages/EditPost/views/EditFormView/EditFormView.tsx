import { HelpIcon } from '../../../../assets';
import { useEditForm } from '../../container';
import { EditFormViewProps } from '../../type';
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
  StTitleText,
} from './style';

export const EditFormView: React.FC<EditFormViewProps> = ({
  post: initialPost,
  setPost,
}) => {
  const { post, onChangeTitle, onChangeContent } = useEditForm({
    initialPost,
    setPost,
  });

  return (
    <StFormContainer>
      <StInputContainer>
        <input value={post.title} onChange={onChangeTitle} maxLength={50} />
        <div>{post.title.length}/50자</div>
      </StInputContainer>
      <StContentContainer>
        <StTextContainer>
          <textarea
            value={post.content}
            onChange={onChangeContent}
            maxLength={500}
          />
          <div>{post.content.length}/500자</div>
        </StTextContainer>

        <StPhotoBoxContainer>
          <StIconBox>
            <HelpIcon />
            <StPhotoText>사진을 삭제, 수정할 수 없습니다</StPhotoText>
          </StIconBox>
          <StPhotoContainer>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <StPhotoBox
                  key={index}
                  image={post.imageUrlList?.[index] || undefined}
                >
                  {!post.imageUrlList?.[index] && (
                    <StTitleText>행동대장</StTitleText>
                  )}
                </StPhotoBox>
              ))}
          </StPhotoContainer>
        </StPhotoBoxContainer>
      </StContentContainer>
    </StFormContainer>
  );
};
