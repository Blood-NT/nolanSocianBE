
// import { Request, Response } from 'express';
// import { buyTDSService } from '../service/TDSService';
// import { createPaymentService } from '../service/paymentService';
// import { getInforService, subMoneyService } from '../service/userService';
// // import { getRepository } from 'typeorm';

// const instagram_comment = async (req: Request, res: Response) => {
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
//             paytype: "insCmt",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_insCmt");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }


//     console.log("ok  instagramcmt", req.body);
//     res.status(200).send("ok  instagramcmt");
// }
// const instagram_follow = async (req: Request, res: Response) => {
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
//             paytype: "insFollow",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_insFollow");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("ok  instagramfollow", req.body);
//     res.status(200).send("ok  instagram follow");
// }
// const instagram_like = async (req: Request, res: Response) => {
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
//             paytype: "insLike",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_insLike");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("ok  instagramlike", req.body);
//     res.status(200).send("ok  instagramlike");
// }
// const instagram_likecmt = async (req: Request, res: Response) => {
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
//             paytype: "insLikeCmt",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_insLikeCmt");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }

//     }

//     console.log("ok  instagramlike cmt", req.body);
//     res.status(200).send("ok  instagramlike cmt");
// }
// const instagram_ping = async (req: Request, res: Response) => {
  

//     console.log("ok  instagramping", req.body);
//     res.status(200).send("pong");
// }

// export default {
//     instagram_comment,
//     instagram_follow,
//     instagram_like,
//     instagram_likecmt,
//     instagram_ping
// }