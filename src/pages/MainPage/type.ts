export interface Post {
  postId: number;
  title: string;
  thumbnail: string;
  likeCount: number;
  nickname: string;
  address: string;
}

export interface Ping {
  postId: number;
  latitude: number;
  longitude: number;
}

