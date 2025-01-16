export interface PostResponse {
  id: number;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  postedAt: string;
  content: {
    text: string;
    image?: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  comments?: {
    userName: string;
    userAvatar: string;
    createdAt: string;
    comment: string;
  }[];
}