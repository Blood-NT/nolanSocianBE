// import { Request, Response } from "express";
// import { buyTDSService } from "../service/TDSService";
// import { createPaymentService } from "../service/paymentService";
// import { getInforService, subMoneyService } from "../service/userService";

// // import multer from 'multer';
// // const upload = multer();


// const tiktokCmt = async (req: Request, res: Response) => {
//     const formData = req.body;
//     // Thêm các trường dữ liệu vào formData
//     console.log("formData", formData);
//     // gọi api mua tds
//     const quality = formData.quality;
//     const checkPrice= await getInforService(formData.uid)

//     if(checkPrice==201){
//         res.status(201).send("user không tồn tại");
//         return;
//     }
//     else if(checkPrice.money < quality*1000){
//         res.status(200).send("số tiền không đủ");
//         return
//     }
//     else{
//         // goij API tds
//         const sendTDS= await buyTDSService(formData.id,quality,formData.uid);        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "tiktokCmt",
//             payValue: quality*1000,
//             payQuantity: quality,
//             payUser: formData.uid,
//             payLink: formData.id,
//             payNote:formData.note,
//             payDate: new Date(),
//         }
//         // gọi API payment// lưu mua bán đồ đồ
//         const check = await createPaymentService(newPayment);
//         if(check == 201){
//              res.status(201).send("lỗi hệ thống, thông báo admin");
//              return
//         }
//         // gọi api trừ tiền// lưu lịch sử trừ tiền đồ đồ
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_tiktokCmt");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("tiktok cmt", req.body);
//     return res.status(200).send("ok tiktok cmt");
// }
// const tiktokFollow = async (req: Request, res: Response) => {
//     const formData = req.body;
//     // Thêm các trường dữ liệu vào formData
//     console.log("formData", formData);
//     // gọi api mua tds
//     const quality = formData.quality;
//     const checkPrice= await getInforService(formData.uid)

//     if(checkPrice==201){
//         res.status(201).send("user không tồn tại");
//         return;
//     }
//     else if(checkPrice.money < quality*1000){
//         res.status(200).send("số tiền không đủ");
//         return
//     }
//     else{
//         // goij API tds
//         const sendTDS= await buyTDSService(formData.id,quality,formData.uid);        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "tiktokFollow",
//             payValue: quality*1000,
//             payQuantity: quality,
//             payUser: formData.uid,
//             payLink: formData.id,
//             payNote:formData.note,
//             payDate: new Date(),
//         }
//         // gọi API payment// lưu mua bán đồ đồ
//         const check = await createPaymentService(newPayment);
//         if(check == 201){
//              res.status(201).send("lỗi hệ thống, thông báo admin");
//              return
//         }
//         // gọi api trừ tiền// lưu lịch sử trừ tiền đồ đồ
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_tiktokFollow");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("tiktok follow", req.body);
//     return res.status(200).send("ok tiktok follow");
// }
// const tiktokLikeVip = async (req: Request, res: Response) => {
//     const formData = req.body;
//     // Thêm các trường dữ liệu vào formData
//     console.log("formData", formData);
//     // gọi api mua tds
//     const quality = formData.quality;
//     const checkPrice= await getInforService(formData.uid)

//     if(checkPrice==201){
//         res.status(201).send("user không tồn tại");
//         return;
//     }
//     else if(checkPrice.money < quality*1000){
//         res.status(200).send("số tiền không đủ");
//         return
//     }
//     else{
//         // goij API tds
//         const sendTDS= await buyTDSService(formData.id,quality,formData.uid);        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "tiktokLikeVip",
//             payValue: quality*1000,
//             payQuantity: quality,
//             payUser: formData.uid,
//             payLink: formData.id,
//             payNote:formData.note,
//             payDate: new Date(),
//         }
//         // gọi API payment// lưu mua bán đồ đồ
//         const check = await createPaymentService(newPayment);
//         if(check == 201){
//              res.status(201).send("lỗi hệ thống, thông báo admin");
//              return
//         }
//         // gọi api trừ tiền// lưu lịch sử trừ tiền đồ đồ
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_tiktokLikeVip");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("tiktok like vip", req.body);
//     return res.status(200).send("ok tiktok like vip");
// }
// const tiktokShare = async (req: Request, res: Response) => {
//     const formData = req.body;
//     // Thêm các trường dữ liệu vào formData
//     console.log("formData", formData);
//     // gọi api mua tds
//     const quality = formData.quality;
//     const checkPrice= await getInforService(formData.uid)

//     if(checkPrice==201){
//         res.status(201).send("user không tồn tại");
//         return;
//     }
//     else if(checkPrice.money < quality*1000){
//         res.status(200).send("số tiền không đủ");
//         return
//     }
//     else{
//         // goij API tds
//         const sendTDS= await buyTDSService(formData.id,quality,formData.uid);        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "tiktokShare",
//             payValue: quality*1000,
//             payQuantity: quality,
//             payUser: formData.uid,
//             payLink: formData.id,
//             payNote:formData.note,
//             payDate: new Date(),
//         }
//         // gọi API payment// lưu mua bán đồ đồ
//         const check = await createPaymentService(newPayment);
//         if(check == 201){
//              res.status(201).send("lỗi hệ thống, thông báo admin");
//              return
//         }
//         // gọi api trừ tiền// lưu lịch sử trừ tiền đồ đồ
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_tiktokShare");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("tiktok share", req.body);
//     return res.status(200).send("ok tiktok share");
// }
// const tiktokShareLive = async (req: Request, res: Response) => {
//     const formData = req.body;
//     // Thêm các trường dữ liệu vào formData
//     console.log("formData", formData);
//     // gọi api mua tds
//     const quality = formData.quality;
//     const checkPrice= await getInforService(formData.uid)

//     if(checkPrice==201){
//         res.status(201).send("user không tồn tại");
//         return;
//     }
//     else if(checkPrice.money < quality*1000){
//         res.status(200).send("số tiền không đủ");
//         return
//     }
//     else{
//         // goij API tds
//         const sendTDS= await buyTDSService(formData.id,quality,formData.uid);        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "tiktokShareLive",
//             payValue: quality*1000,
//             payQuantity: quality,
//             payUser: formData.uid,
//             payLink: formData.id,
//             payNote:formData.note,
//             payDate: new Date(),
//         }
//         // gọi API payment// lưu mua bán đồ đồ
//         const check = await createPaymentService(newPayment);
//         if(check == 201){
//              res.status(201).send("lỗi hệ thống, thông báo admin");
//              return
//         }
//         // gọi api trừ tiền// lưu lịch sử trừ tiền đồ đồ
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_tiktokShareLive");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("tiktok share live", req.body);
//     return res.status(200).send("ok tiktok share live");
// }
// const tiktokTymVideo = async (req: Request, res: Response) => {
//     const formData = req.body;
//     // Thêm các trường dữ liệu vào formData
//     console.log("formData", formData);
//     // gọi api mua tds
//     const quality = formData.quality;
//     const checkPrice= await getInforService(formData.uid)

//     if(checkPrice==201){
//         res.status(201).send("user không tồn tại");
//         return;
//     }
//     else if(checkPrice.money < quality*1000){
//         res.status(200).send("số tiền không đủ");
//         return
//     }
//     else{
//         // goij API tds
//         const sendTDS= await buyTDSService(formData.id,quality,formData.uid);        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "tiktokTymVideo",
//             payValue: quality*1000,
//             payQuantity: quality,
//             payUser: formData.uid,
//             payLink: formData.id,
//             payNote:formData.note,
//             payDate: new Date(),
//         }
//         // gọi API payment// lưu mua bán đồ đồ
//         const check = await createPaymentService(newPayment);
//         if(check == 201){
//              res.status(201).send("lỗi hệ thống, thông báo admin");
//              return
//         }
//         // gọi api trừ tiền// lưu lịch sử trừ tiền đồ đồ
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_tiktokTymVideo");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("tiktok tym video", req.body);
//     return res.status(200).send("ok tiktok tym video");
// }
// const tiktokPing = async (req: Request, res: Response) => {
//     console.log("tiktok ping", req.body);
//     return res.status(200).send("pong");
// }

// export default {

//     tiktokCmt,
//     tiktokFollow,
//     tiktokLikeVip,
//     tiktokShare,
//     tiktokShareLive,
//     tiktokTymVideo,
//     tiktokPing

// }
