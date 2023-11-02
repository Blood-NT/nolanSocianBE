import express, { Router } from 'express';
import path from 'path';
import sequelize from '../config/connectDB';
import userAPI from './userAPI';
import facebookAPI from './facebookAPI';
import tiktokAPI from './tiktokAPI';
import instagramAPI from './instagramAPI';

const router: Router = express.Router();
router.use(express.static(path.join(__dirname, 'public')));

router.use("/user", userAPI);
router.use("/facebook", facebookAPI);
router.use("/tiktok", tiktokAPI);
router.use("/instagram", instagramAPI);

async function testConnection() {
    console.log(" check db");
  
    try {
      await sequelize.authenticate();
      console.log('Kết nối cơ sở dữ liệu thành côngkk!', sequelize.getDatabaseName());
      await sequelize.sync({ force: true })
    } catch (error) {
      console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
      await sequelize.sync({ force: true })
    }
  }
  
router.get('/', (req, res) => {
    console.log(" check dqqb",testConnection());
console.log(req.body);
    res.send('Hello World!');
}
);
export default router;
