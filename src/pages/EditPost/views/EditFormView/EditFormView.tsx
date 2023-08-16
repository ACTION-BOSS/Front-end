import { HelpIcon } from '../../../../assets';
import { useRecoilState } from 'recoil';
import { postState } from '../../../../providers';
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

export const EditFormView = () => {
  const [post, setPost] = useRecoilState(postState);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({ ...prev, title: e.target.value }));
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost((prev) => ({ ...prev, content: e.target.value }));
  };

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
          {post?.imageUrlList &&
            post.imageUrlList.map((imageUrl, index) => (
              <StPhotoBox key={index} image={imageUrl} />
            ))}
        </StPhotoBoxContainer>
      </StContentContainer>
    </StFormContainer>
  );
};
