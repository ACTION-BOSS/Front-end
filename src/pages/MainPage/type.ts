export type Post = {
  postId: number;
  title: string;
  thumbnail: string;
  agreeCount: number;
  nickname: string;
  address: string;
  done?: boolean;
};

export type Ping = {
  postId: number;
  latitude: number;
  longitude: number;
};

export type Coordinates = {
  northlat: number;
  eastlon: number;
  southlat: number;
  westlon: number;
};
