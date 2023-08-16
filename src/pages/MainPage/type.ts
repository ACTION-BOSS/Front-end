export interface Post {
  postId: number;
  title: string;
  thumbnail: string;
  agreeCount: number;
  nickname: string;
  address: string;
}

export interface Ping {
  postId: number;
  latitude: number;
  longitude: number;
}

export interface Coordinates {
  northlat: number;
  eastlon: number;
  southlat: number;
  westlon: number;
}
