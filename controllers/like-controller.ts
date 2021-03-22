import { Request, Response } from "express";
import { Like } from "../models/like";
import { LikeService } from "../services/like-service";
import { failureResponse, mongoError, successResponse} from '../common/service'
import { ObjectID } from "bson";


export class LikeController {

  private likeService: LikeService;

  constructor(likeService: LikeService) {
    this.likeService = likeService;
    console.log(this);
  }
  
  async createLike(req: Request, res: Response) {
    let like: Like;

    like = {
      userID: req.body.userID,
      snippetID: req.body.snippetID
    }

    try {
      const newLike = await this.likeService.createLike(like);
      successResponse("Success", newLike, res);
    } catch(err) {
      mongoError(err, res);
    }
  }

  async getLikesPerSnippet(req: Request, res: Response) {
    console.log(req.params.id);
    console.log(this);
    try {
      const likesPerSnipped = await this.likeService.getLikesPerSnippet(new ObjectID(req.params.id));
      successResponse("Success", likesPerSnipped, res);
    } catch(err) {
      mongoError(err, res);
    }   
  }
  
}