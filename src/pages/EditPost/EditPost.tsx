import { EditFormView } from './views';
import {
  StEditPostContainer,
  StBtnContainer,
  StBtnBox1,
  StBtnBox2,
  StBg,
  StSkyline,
  StGrayBg,
} from './style';
import { Theme } from '../../styles';
import { EditMapView } from './views/EditMapView/EditMapView';
import { EModalType, useModal } from '../../providers';
import { Button } from '../../shared';
import { useNavigate } from 'react-router-dom';
import { useEditPost } from './container';

export const EditPost = () => {
  const { openModal, closeModal } = useModal();
  const { post, setPost, isLoading, isError, mutation } = useEditPost();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching the post</div>;
  }

  return (
    <StEditPostContainer>
      {post && <EditFormView post={post} setPost={setPost} />}
      {post && <EditMapView post={post} />}

      <StBtnContainer>
        <StBtnBox1>
          <Button
            label="취소"
            $buttonTheme="empty"
            size="mediumLong"
            fontSize={Theme.fontSizes.h2}
            onClick={() =>
              openModal(EModalType.POP_UP, {
                title: '작업을 중단하고 나가시겠습니까?',
                cancelButton: true,
                functionButton: {
                  theme: 'pink',
                  label: '나가기',
                  onClick: () => {
                    navigate(-1);
                    closeModal();
                  },
                },
              })
            }
          />
        </StBtnBox1>
        <StBtnBox2>
          <Button
            label="수정 완료"
            $buttonTheme="blue"
            size="mediumLong"
            fontSize={Theme.fontSizes.h2}
            onClick={() =>
              openModal(EModalType.POP_UP, {
                title: '수정한 게시물을 업로드 할까요?',
                cancelButton: true,
                functionButton: {
                  theme: 'blue',
                  label: '확인',
                  onClick: () => {
                    mutation.mutate(), closeModal();
                  },
                },
              })
            }
          />
        </StBtnBox2>
      </StBtnContainer>

      <StBg>
        <StSkyline></StSkyline>
        <StGrayBg></StGrayBg>
      </StBg>
    </StEditPostContainer>
  );
};
