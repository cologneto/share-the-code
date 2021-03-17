import { Db, ObjectId, ObjectID } from "mongodb";
import DBInstance from "../handler/db.instance";
import { Like } from "../models/like";
import { ILikeService } from "./ilike-service";

export class LikeService implements ILikeService {
  private _db: Db;

  constructor(db: Db) {
    this._db = db;
  }

  async createLike(like: Like): Promise<any> {
    return this._db.collection('likes').insertOne(like);
  }
  async getLikesPerSnippet(snippedId: string): Promise<Like[]> {
    return this._db.collection('likes').findOne({snippedId: snippedId})
  }

}