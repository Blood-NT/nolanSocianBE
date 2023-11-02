import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
// import {userModel} from "../models/user.model";
// import { User } from "../interfaces/user.interfaces";
const sequelize = new Sequelize( {
  database:"nolansoical",
  username:"root",
  password:"123456",
  host: "localhost",
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

// Hàm kiểm tra kết nối và hiển thị thông báo
async function testConnection() {

  try {
    await sequelize.authenticate();
    console.log('Kết nối cơ sở dữ liệu thành công!', sequelize.getDatabaseName());
  } catch (error) {
    console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
  }

  // // kiểm tra nếu bảng user không có hàng nào thì thêm dữ liệu mẫu
  // const count = await userModel.count();
  // if (count === 0) {
  //   console.log("thêm dữ liệu mẫu");
  //   const tmp  = {
  //     id: 'admin',
  //     password: '123456',
  //     email: 'admin1234567890@gmail.com',
  //     token: '1234567890',
  //     role: 1,
  //     status:true,
  //   };
  //   const check:User = await userModel.create(tmp);
  //   console.log("check add data",check);
  // }


}

testConnection();

export default sequelize;
