import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { createPostState } from '../state';

export const useCreateForm = () => {
  const [post, setPost] = useRecoilState(createPostState);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files).slice(0, 3 - previewImages.length);
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

  return {
    post,
    previewImages,
    handleImageUpload,
    removeImage,
    handleTitleChange,
    handleContentChange,
  };
};
