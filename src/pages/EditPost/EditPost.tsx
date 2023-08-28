import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { Button, getAccessToken } from '../../shared';
import { EditPostType } from './type';
import { Theme } from '../../styles';
import { EditMapView } from './views/EditMapView/EditMapView';
import { EModalType, useModal } from '../../providers';

export const EditPost = () => {
  const { openModal, closeModal } = useModal();
  const token = getAccessToken();
  const [post, setPost] = useState<EditPostType | null>(null);

  const navigate = useNavigate();

  const { id: stringId } = useParams();
  const id = Number(stringId);

  const getPostDetail = async (id: number) => {
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined;

    const response = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/posts/${id}`,
      {
        headers: headers,
      },
    );
    return response.data.data;
  };

  const { data, isError, isLoading } = useQuery(['postDetail', id], () =>
    getPostDetail(id),
  );

  console.log(data);

  if (data && !data.owner) {
    window.location.replace('javascript:history.back()');
    return null;
  }

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data, setPost]);

  const mutation = useMutation(
    () =>
      axios.put(`${process.env.REACT_APP_API_URI}/api/posts/${id}`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        navigate(`/detail/${id}`);
      },
      onError: (error) => {
        console.error('수정 요청 실패:', error);
      },
    },
  );

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
