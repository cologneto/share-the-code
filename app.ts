import express, { Request, Response } from 'express';
import DBInstance  from './handler/db.instance';
import bodyParser from 'body-parser';
import { LikeService } from './services/like-service' 


const app = express();
const port = 3131;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.get('/', async (req: Request, res: Response) => {

  try {
    const db =  await DBInstance.getInstance();

    const users = await db.collection('users').find({}).toArray(); 

    res.status(200).json({success: true, data: users});
  } 
  catch(e) {
    console.log("Error on fetching",e)
    res.status(500).json({ success : false,data : null })
  }
});

/* app.get('/likes', async (req: Request, res: Response) => {
  const likeService = new LikeService();

  const likesperSnipped = await likeService.getLikesPerSnippet('5ffbfea6111f60343877d79d');

  res.status(200).json({success: true, data: likesperSnipped});
}) */

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});