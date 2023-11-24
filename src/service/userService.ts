import { User } from "../interfaces/user.interfaces";
import { userModel } from "../models/user.model";
import { Op } from "sequelize";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyModel } from "../models/token.model";
import { createMoneyService } from "./moneyService";
import { Money } from "../interfaces/money.interfaces";
import { moneyModel } from "../models/money.model";
import { forgotPassword } from "../interfaces/forgotPassword.interface";
import { forgotPasswordModel } from "../models/forgotPassword.model";
const ACCESS_TIME = 1800; // 30m
const REFRESH_TIME = 864000; // 10 day


const loginService = async (udata: any) => {
    const { id, password } = udata;
    console.log();
    const user: User | null = await userModel.findOne({ where: { id: id } });
    if (!user) {
        return {statusCode:201}; // user không tồn tại
    }
    const checkPass = bcrypt.compareSync(password, user.password);
    if (!checkPass) {
        return {statusCode:202}; // sai mật khẩu
    }

    if (user.status === false) {
        return {statusCode:203}; // chưa xác nhận tài khoản
    }
    const accessToken = await getToken(user.id, user.role, "accessToken");
    const refreshToken = await getToken(user.id, user.role, "refreshToken");

    const data = await userModel.update({ token: refreshToken }, { where: { id: id } });
    console.log("accessToken", accessToken);
    console.log("user", user);
    console.log("pass", password);
    console.log(data);
    return {statusCode:200,accessToken:accessToken,user};
}

const registerService = async (newUser: User) => {
    const checkUser = await userModel.findOne(
        { where: { [Op.or]: [{ email: newUser.email }, { id: newUser.id }] } }
    );

    if (checkUser && checkUser.status === false) {
        // xoas user da ton tai nhuwng chuwa xacs nhaanj quas laau
        // if (checkUser && checkUser.status === false) {
        //     await userModel.destroy({ where: { [Op.or]: [{ email: newUser.email }, { id: newUser.email }] } });
        // }
        return 202;// user đã tồn tại nhưng chưa xác nhận
    }
    if (checkUser && checkUser.status === true) {
        return 201;// user đã tồn tại
    }
    newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
    newUser.status = false;
    newUser.role = 0;
    newUser.token = "";
    newUser.id = newUser.id;
    newUser.money = 0;
    const check = await userModel.create(newUser);
    // tạo user trong bảng money    
    console.log("check add data", check);
    return 200;
}

const changePasswordService = async (email: string, oldPass: string, newPass:string) => {
    const user: User | null = await userModel.findOne({ where: { email: email } });
    if (!user) {
        return 201; // user không tồn tại
    }
    const checkPass = bcrypt.compareSync(oldPass, user.password);
    if (!checkPass) {
        return 202; // sai mật khẩu
    }
    const newPassHash = bcrypt.hashSync(newPass, bcrypt.genSaltSync(8));
    await userModel.update({ password: newPassHash }, { where: { email: email } });
    return 200;
}
const forgotPasswordService = async (email: string,pass:string , token:string) => {
    const data:any={
        email:email,
        createAt:new Date(),
        uniqueString:token,
        effectiveSeconds:600,
        password:bcrypt.hashSync(pass, bcrypt.genSaltSync(8)),
    }
    const create = await forgotPasswordModel.create(data);
    console.log("create",create);
    if(!create){
        return 201;
    }
    return 200;
}
const getVerifyPasswordService = async (email: string, uniqueString: string) => {
    const foundVerify: forgotPassword | null = await forgotPasswordModel.findOne({
      where: {
        email: email,
        uniqueString: uniqueString,
      },
    });
    return {
      statusCode: "200",
      message: "lấy xác minh thành công",
      data: foundVerify,
    };
  };

  const deleteVerifyPasswordService = async (email: string) => {
    await forgotPasswordModel.destroy({
      where: {
        email: email,
      },
    });
    return { statusCode: "200", message: "xóa xác minh thành công" };
  };

const checkUserService = async (email: string) => {
    const user: User | null = await userModel.findOne({ where: { email: email } });
    if (!user) {
        return 201; // user không tồn tại
    }
    return 200;
}


const verifyAccountService = async (email: string, uniqueString: string) => {
    const user: User | null = await userModel.findOne({ where: { email: email } });

    if (!user) {
        return 201; // user không tồn tại
    }
    else {
        const check =  await verifyModel.findOne({ where: { email: email, uniqueString: uniqueString } });
        if (!check) {
            return 202; // sai uniqueString
        }
        else {
        await userModel.update({ status: true }, { where: { email: email } });
        return 200;
        }
    }
}
const changeRoleService = async (email: string, role: number) => {
    const user: User | null = await userModel.findOne({ where: { email: email } });
    if (!user) {
        return 201; // user không tồn tại
    }
    await userModel.update({ role: role }, { where: { email: email } });
    return 200;
}

const getToken = (
    id: string,
    role: number | undefined,
    type: string
): string => {
    let key = process.env.JWT_SECRET || "nolan";
    const payload = {
        id: id,
        rule: role || "",
    };
    if (type === "accessToken") {
        const accessToken = jwt.sign(payload, key, {
            expiresIn: ACCESS_TIME,
        });
        return accessToken;
    }
    const refreshToken = jwt.sign(payload, key, {
        expiresIn: REFRESH_TIME,
    });
    return refreshToken;
};


const addMoneyService = async (uid: string, money: number) => {
    const user: User | null = await userModel.findOne({ where: { id: uid, status: true } });
    if (!user) {
        return 201; // user không tồn tại
    }
    // cộng tiền vào tài khoản
    const newMoney: any ={
        uid:uid,
        money:money,
        type:"add",
    }
    
    await createMoneyService(newMoney);

    await userModel.update({ money: user.money + money }, { where: { id: uid } });
    return 200;
}

const subMoneyService = async (uid: string, money: number,type:string) => {
    const user: User | null = await userModel.findOne({ where: { id: uid, status: true } });
    if (!user) {
        return 201; // user không tồn tại
    }
    // cộng tiền vào tài khoản
    const newMoney: any ={
        uid:uid,
        money:money,
        type:type,
    }
    
    await createMoneyService(newMoney);

    await userModel.update({ money: user.money - money }, { where: { id: uid } });
    return 200;
}

const getInforService = async (id: string) => {
    const user: User | null = await userModel.findOne({ where: { id: id } });
    if (!user) {
        return 201; // user không tồn tại
    }
    // trả về thông tin user
    return user;
}
const getAllMoneyHistorieService = async (id: string) => {
    const user: User | null = await userModel.findOne({ where: { id: id } });
    if (!user) {
        return 201; // user không tồn tại
    }
    else {
        // trả về lịch sử nạp tiền
        const money:Money[] = await moneyModel.findAll({ where: { uid: id } });
        if (!money) {
            return 202; //chưa có lịch sử nạp tiền
        }
        return money;
    }
}

const changePasswordUserService = async (
    email: string,
    newpassword: string
) => {
    await userModel.update(
        {
            password: newpassword,
        },
        { where: { email: email } }
    );
    return {
        statusCode: "200",
        message: "thay đổi mật khẩu thành công ",
    };
};
export {
    loginService,
    registerService,
    changePasswordService,
    forgotPasswordService,
    verifyAccountService,
    changeRoleService,
    getToken,
    getInforService,
    addMoneyService,
    subMoneyService,
    getAllMoneyHistorieService,
    checkUserService,
    getVerifyPasswordService,
    deleteVerifyPasswordService,
    changePasswordUserService,

};