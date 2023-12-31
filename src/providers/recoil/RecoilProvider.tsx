import { createContext, FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

// export interface PostState {
//   title: string;
//   content: string;
//   images: File[];
//   latitude: number;
//   longitude: number;
//   address: string;
//   imageUrlList?: string[];
// }

// export const postState = atom<PostState>({
//   key: 'postState',
//   default: {
//     latitude: 0,
//     longitude: 0,
//     address: '',
//     title: '',
//     content: '',
//     images: [],
//     imageUrlList: [],
//   },
// });

export interface IRecoilContext {}

export const RecoilContext = createContext<IRecoilContext | null>(null);

type RecoilProviderProps = {
  children: ReactNode;
};

export const RecoilProvider: FC<RecoilProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
