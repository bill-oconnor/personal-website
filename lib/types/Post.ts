import { Tag } from "./Tag";

export interface Post {
  id: string;
  title: string;
  tags: Tag[];
  description: string;
  url: string;
}
