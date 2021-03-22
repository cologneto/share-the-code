import express, { Request, Response } from 'express';
import DBInstance  from './handler/db.instance';
import bodyParser from 'body-parser';
import { LikeService } from './services/like-service' 
import { ObjectID, ObjectId } from 'bson';
import { LikeRoutes } from './routes/like-routes';
import { Db } from 'mongodb';
import { LikeController } from './controllers/like-controller';

DBInstance.getInstance().then((db) => {
  const app = express();
  const port = 3131;
  const likeService = new LikeService(db);
  const likeController = new LikeController(likeService);
  const likeRoutes = new LikeRoutes(likeController);
  
  likeRoutes.route(app);

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended : true}))

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });  
}).catch(() => {
  console.log("asdfasdfasdfasdf");
})