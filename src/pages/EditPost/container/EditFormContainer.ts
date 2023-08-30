import { useState, useEffect } from 'react';
import { EditPostType } from '../type';

type UseEditFormProps = {
  initialPost: EditPostType;
  setPost: React.Dispatch<React.SetStateAction<EditPostType | null>>;
};

export const useEditForm = ({ initialPost, setPost }: UseEditFormProps) => {
  const [post, updatePost] = useState<EditPostType>(initialPost);

  useEffect(() => {
    updatePost(initialPost);
  }, [initialPost]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPost = { ...post, title: e.target.value };
    updatePost(newPost);
    setPost(newPost);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newPost = { ...post, content: e.target.value };
    updatePost(newPost);
    setPost(newPost);
  };

  return {
    post,
    onChangeTitle,
    onChangeContent,
  };
};
