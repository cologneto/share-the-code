import { Application } from "express";
import { LikeController } from "../controllers/like-controller";

export class LikeRoutes {
  private likeController: LikeController;

  constructor(likeController: LikeController) {
    this.likeController = likeController;
  }

  public route(app: Application) {
    app.post('/likes', this.likeController.createLike.bind(this.likeController));
    app.get('/likes/:id', this.likeController.getLikesPerSnippet.bind(this.likeController));
  }
}