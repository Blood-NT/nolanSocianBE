import { Request, Response } from "express";
import { changePasswordService, changePasswordUserService, checkUserService, deleteVerifyPasswordService, forgotPasswordService, getInforService, getVerifyPasswordService, loginService, registerService, verifyAccountService } from "../service/userService";
import { v4 as uuidv4 } from 'uuid';
import { createVerifyToken } from "../service/tokenService";
import { sendNewPassword, sendVerifiForgotPassword, sendVerificationEmail } from "../External/emailSMTP";
import { forgotPassword } from "src/interfaces/forgotPassword.interface";
const login = async (req: Request, res: Response) => {
    try {
        const log = await loginService(req.body);
        if (log.statusCode === 200) {
            // delete log.status;
            console.log("đăng nhập thành công", log);
            return res.status(200).json(log);
        }
        else if (log.statusCode === 201) {
            console.log("user không tồn tại");
            return res.status(200).json({ message: "User không tồn tại", statusCode: 201 });
        }
        else if (log.statusCode === 202) {
            console.log("mật khẩu không đúng");
            return res.status(200).json({ message: "Mật khẩu không đúng" });
        }
        else if (log.statusCode === 203) {
            console.log("tài khoản chưa được xác thực");
            return res.status(200).json({ message: "Tài khoản chưa được xác thực" });
        }
        else {
            console.log("lỗi không xác định");
            return res.status(200).json({ message: "Lỗi không xác định" });
        }
    }
    catch (e) {
        console.log("lỗi", e);
        return res.status(200).json({ message: "Lỗi", error: e });
    }
}

const register = async (req: Request, res: Response) => {
    console.log("req.bodyyy", req.body);
    try {
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
        else if (log === 201) {
            return res.status(200).json({ message: "User đã tồn tại" });
        }
        else if (log === 202) {
            return res.status(200).json({ message: "User đã tồn tại nhưng chưa xác nhận" });
        }
        else {
            return res.status(200).json({ message: "Lỗi không xác định" });
        }
    }
    catch (e) {
        return res.status(200).json({ message: "Lỗi", error: e });
    }

}

const verifyAccount = async (req: Request, res: Response) => {
    try {
        console.log("join");
        const { email, uniqueString } = req.params;
        const check = await verifyAccountService(email, uniqueString);
        if (check === 200) {
            return res.status(200).json({ message: "Xác thực thành công" });
        }
        return res.status(200).json({ message: "Xác thực thất bại" });
    }
    catch (e) {
        return res.status(200).json({ message: "Lỗi", error: e });
    }

}

// const verifyChangePassword = async (req: Request, res: Response) => {
//     try {
//         const email: string = req.params.email;
//         const uniqueString: string = req.params.uniqueString;
//         const foundVerify: forgotPassword | null = (
//             await getVerifyPasswordService(email, uniqueString)
//         ).data;
//         if (!foundVerify) {
//             const message = "Tài khoản không tồn tại hoặc đã được xác minh";
//             return res.status(200).json(message);
//             return;
//         }
//         if (
//             foundVerify.createAt.getTime() + foundVerify.effectiveSeconds * 1000 <
//             new Date().getTime()
//         ) {
//             const message = "Liên kết đã hết hạn, vui lòng thao tác lại";
            
//             return res.status(200).json(message);
//         }
//         await deleteVerifyPasswordService(email);
//         await changePasswordUserService(email, foundVerify.password);
//         res.redirect(`/user/verified`);
//     } catch (error) {
//         console.log(error);
//         const message = "Đã xảy ra lỗi khi kiểm tra xác minh người dùng hiện tại";
//         return res.status(200).json(message);
//     }
// };
const forgotPasswordcontroller = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const check = await checkUserService(email);

        //random passs là 1 chuỗi số ngẫu nhiên có 10 ký tự
        const randomPass = Math.floor(1000000000 + Math.random() * 9000000000);
        if (check === 200) {
            const uniqueString = uuidv4();
            const newVerify: any = {
                email: email,
                uniqueString: uniqueString,
            };
            await createVerifyToken(newVerify);

            await forgotPasswordService(email, randomPass.toString(), uniqueString);
            await sendVerifiForgotPassword(newVerify.email, newVerify.uniqueString, randomPass.toString());
            return res.status(200).json({ message: "Kiểm tra email để thay đổi mật khẩu" });
        }
        return res.status(200).json({ message: "Email không tồn tại" });

    }
    catch (e) {
        return res.status(200).json({ message: "Lỗi", error: e });
    }
}
const changePassword = async (req: Request, res: Response) => {
    try {
        const { email, oldPass, newPass } = req.body;
        const check = await changePasswordService(email, oldPass, newPass);
        if (check === 200) {
            await sendNewPassword(email, newPass);
            return res.status(200).json({ message: " vui lòng kiểm tra email để xác thực tài khoản" });
        }
        return res.status(200).json({ message: "Xác thực thất bại" });
    }
    catch (e) {
        return res.status(200).json({ message: "Lỗi", error: e });
    }
}
const getInfo = async (req: Request, res: Response) => {
    //lấy thông tin user thông qua uid
    try {
        const { uid } = req.body;
        const check = await getInforService(uid);
        if (check === 201) {
            return res.status(200).json({ message: "lấy thông tin thất bại" });
        }
        return res.status(200).json({ message: "lấy thông tin thành công" });

    }

    catch (e) {
        return res.status(200).json({ message: "Lỗi", error: e });

    }
}

const getAllPaymentHistorie = async (req: Request, res: Response) => {
    // lấy lịch sử giao dịch 
    try {
        const { uid } = req.body;
        const check = await getInforService(uid);
        if (check === 201) {
            return res.status(200).json({ message: "lấy thông tin thất bại" });
        }
        return res.status(200).json({ message: "lấy thông tin thành công" });

    }

    catch (e) {
        return res.status(200).json({ message: "Lỗi", error: e });

    }
}
const getAllMoneyHistorie = async (req: Request, res: Response) => {
    // lấy lịch sử nạp tiền
    try {
        const { uid } = req.body;
        const check = await getInforService(uid);
        if (check === 201) {
            return res.status(200).json({ message: "lấy thông tin thất bại" });
        }
        return res.status(200).json({ message: "lấy thông tin thành công" });

    }

    catch (e) {
        return res.status(200).json({ message: "Lỗi", error: e });

    }
}


const verifyChangePassword = async (req: Request, res: Response) => {
    try {
        const email: string = req.params.email;
        const uniqueString: string = req.params.uniqueString;
        const foundVerify: forgotPassword | null = (
            await getVerifyPasswordService(email, uniqueString)
        ).data;
        if (!foundVerify) {
            const message = "Tài khoản không tồn tại hoặc đã được xác minh";
            return res.status(200).json(message);
            return;
        }
        if (
            foundVerify.createAt.getTime() + foundVerify.effectiveSeconds * 1000 <
            new Date().getTime()
        ) {
            const message = "Liên kết đã hết hạn, vui lòng thao tác lại";
            
            return res.status(200).json(message);
        }
        await deleteVerifyPasswordService(email);
        await changePasswordUserService(email, foundVerify.password);
        res.redirect(`/user/verified`);
        return res.status(200).json({ message: "Đổi mật khẩu thành công" });
    } catch (error) {
        console.log(error);
        const message = "Đã xảy ra lỗi khi kiểm tra xác minh người dùng hiện tại";
        return res.status(200).json(message);
    }
};

export default {
    login,
    register,
    verifyAccount,
    verifyChangePassword,
    forgotPasswordcontroller,
    changePassword,
    getInfo,
    getAllPaymentHistorie,
    getAllMoneyHistorie
    

}