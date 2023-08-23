export interface EditPostType {
  title: string;
  content: string;
  images: File[];
  latitude: number;
  longitude: number;
  address: string;
  imageUrlList?: string[];
}

export interface EditFormViewProps {
  data: EditPostType;
  setPost: React.Dispatch<React.SetStateAction<EditPostType | null>>;
}

export interface EditMapViewProps {
  data: EditPostType;
}
