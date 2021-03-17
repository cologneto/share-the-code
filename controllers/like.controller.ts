import { Request, Response } from "express";
import { LikeService } from "../services/like-service"

export class LikeController {

  private likeService: LikeService;

  constructor(likeService: LikeService) {
    this.likeService = likeService;
  }
  
  public createLike(req: Request, res: Response){
    
  }
}