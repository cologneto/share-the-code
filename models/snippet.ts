import { Like } from "./like";
import { Tag } from "./tag";

export interface Snippet {
  id?: string,
  userID: string,
  tags: Tag,
  likes: Like[],
  dateCreated: Date,
  dateModified: Date
}