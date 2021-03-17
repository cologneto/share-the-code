import { Like } from "../models/like";

export interface ILikeService {
  createLike(like: Like): Promise<void>;
  getLikesPerSnippet(snippedId: string): Promise<Like[]>;
}