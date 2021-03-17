import { MongoClient, Db } from 'mongodb';
import { dbConfig } from '../config/db.config';
class DBInstance {
  private static instance: Db;

  private constructor() {}

  static async getInstance() {
    if (!this.instance) {
      return new Promise<Db>((resolve, reject) => {
        const URL = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}`;
        const dbName = dbConfig.DB;
        MongoClient.connect(URL, (err, client) => {
          if (err) reject('DB Error');
          const db = client.db(dbName);
            this.instance = db;
          resolve(this.instance)
        });
      })
      
    }
    return this.instance;
  }
}

export default DBInstance;



