export interface TUser {
  id?: number;
  name: string;
  avatar: string;
  area: string;
  role: string;
  wallpaper: string;
  contact: string;
  address: string;
  tags?: string[];
  certificate?: {
    image: string
    name: string
    description: string,
  }
  enterprise?: {
    name: string,
    description: string,
    image: string
    infoEnterprise: string
  }
}
