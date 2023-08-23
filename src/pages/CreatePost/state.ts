import { atom } from 'recoil';

export interface CreatePostState {
  title: string;
  content: string;
  images: File[];
  latitude: number;
  longitude: number;
  address: string;
  imageUrlList?: string[];
}

export const createPostState = atom<CreatePostState>({
  key: 'createPostState',
  default: {
    latitude: 0,
    longitude: 0,
    address: '',
    title: '',
    content: '',
    images: [],
    imageUrlList: [],
  },
});
