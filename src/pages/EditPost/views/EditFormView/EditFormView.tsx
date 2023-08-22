import { HelpIcon } from '../../../../assets';
import { EditFormViewProps } from '../../type';
import {
  StFormContainer,
  StInputContainer,
  StContentContainer,
  StTextContainer,
  StPhotoBoxContainer,
  StIconBox,
  StPhotoBox,
  StPhotoText,
} from './style';

export const EditFormView: React.FC<EditFormViewProps> = ({
  data,
  setPost,
}) => {
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => {
      if (prev) {
        return { ...prev, title: e.target.value };
      }
      return null;
    });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost((prev) => {
      if (prev) {
        return { ...prev, content: e.target.value };
      }
      return null;
    });
  };

  return (
    <StFormContainer>
      <StInputContainer>
        <input value={data.title} onChange={onChangeTitle} maxLength={50} />
        <div>{data.title.length}/50자</div>
      </StInputContainer>
      <StContentContainer>
        <StTextContainer>
          <textarea
            value={data.content}
            onChange={onChangeContent}
            maxLength={500}
          />
          <div>{data.content.length}/500자</div>
        </StTextContainer>

        <StPhotoBoxContainer>
          <StIconBox>
            <HelpIcon />
            <StPhotoText>사진을 삭제, 수정할 수 없습니다</StPhotoText>
          </StIconBox>
          {data?.imageUrlList &&
            data.imageUrlList.map((imageUrl, index) => (
              <StPhotoBox key={index} image={imageUrl} />
            ))}
        </StPhotoBoxContainer>
      </StContentContainer>
    </StFormContainer>
  );
};
