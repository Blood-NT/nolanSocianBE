import { Request, Response } from "express";
import { changePasswordService, forgotPasswordService, loginService, registerService, verifyAccountService } from "../service/userService";
import { v4 as uuidv4 } from 'uuid';
import { createVerifyToken } from "../service/tokenService";
import { sendVerifiForgotPassword, sendVerificationEmail } from "../External/emailSMTP";

const login = async (req: Request, res: Response) => {
    const log = await loginService(req.body);
   
    if (log.statusCode === 200) {
        // delete log.status;
        return res.status(200).json(log);
    }    
    return res.status(200).json(log);

}


const register = async (req: Request, res: Response) => {
    console.log(req.body);
    const log = await registerService(req.body);
    if (log === 200) {
        const uniqueString = uuidv4();
        const newVerify: any = {
            email: req.body.email,
            uniqueString: uniqueString,
        };
        await createVerifyToken(newVerify);
        await sendVerificationEmail(newVerify.email, newVerify.uniqueString);
        return res.status(200).json({ message: "Đăng ký thành công, vui lòng kiểm tra email để xác thực tài khoản" });
    }
    return res.status(200).json(log);
}

const verifyAccount = async (req: Request, res: Response) => {
    const { email, uniqueString } = req.params;
    const check = await verifyAccountService(email, uniqueString);
    if (check === 200) {
        return res.status(200).json({ message: "Xác thực thành công" });
    }
    return res.status(200).json({ message: "Xác thực thất bại" });
}
const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;
    const check = await forgotPasswordService(email);
    if (check === 200) {
        const uniqueString = uuidv4();
        const newVerify: any = {
            email: email,
            uniqueString: uniqueString,
        };
        await createVerifyToken(newVerify);
        await sendVerifiForgotPassword(newVerify.email, newVerify.uniqueString);
        return res.status(200).json({ message: "Kiểm tra email để thay đổi mật khẩu" });
    }
    return res.status(200).json({ message: "Email không tồn tại" });
}
const changePassword = async (req: Request, res: Response) => {
    const { email, oldPass, newPass } = req.body;
    const check = await changePasswordService(email,oldPass,newPass);
    if (check === 200) {

        const uniqueString = uuidv4();
        const newVerify: any = {
            email: req.body.email,
            uniqueString: uniqueString,
        };
        await createVerifyToken(newVerify);
        await sendVerificationEmail(newVerify.email, newVerify.uniqueString);
        return res.status(200).json({ message: "Đăng ký thành công, vui lòng kiểm tra email để xác thực tài khoản" });
    }

    return res.status(200).json({ message: "Xác thực thất bại" });
}

export default {
    login,
    register,
    verifyAccount,
    forgotPassword,
    changePassword,

};