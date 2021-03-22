import { ObjectID } from "bson";
import { Like } from "../models/like";

export interface ILikeService {
  createLike(like: Like): Promise<void>;
  getLikesPerSnippet(snippedId: ObjectID): Promise<Like[]>;
}