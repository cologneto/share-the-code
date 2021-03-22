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
  async getLikesPerSnippet(snippetId: ObjectID): Promise<Like[]> {
    console.log("This is the id: " + snippetId);
    return this._db.collection('likes').find({ snippetId: snippetId}).toArray();
  }
}