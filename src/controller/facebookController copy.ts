// import { Request, Response } from 'express';
// import { buyTDSService } from '../service/TDSService';
// import { createPaymentService } from '../service/paymentService';
// import { getInforService, subMoneyService } from '../service/userService';

// const FBcmt = async (req: Request, res: Response) => {
//     const formData = req.body;
//     // Thêm các trường dữ liệu vào formData
//     console.log("formData", formData);
//     // gọi api mua tds
//     const quality = formData.sl;
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
//         const sendTDS= await buyTDSService(formData,"fbCmt");        
//         if (sendTDS == 201) {
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
       
//     }
// }
// const FBfollow = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData.id,quality,"fbFollow");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbFollow",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbFollow");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBfollow", req.body);
//     res.status(200).send("ok FBfollow");
// }


// const FBlike = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData,"fbLike");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbLike",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbLike");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBlike", req.body);
//     res.status(200).send("ok FBlike");
// }
// const FBlikePage = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData,"fbLikePage");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbLikePage",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbLikePage");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBlike page", req.body);
//     res.status(200).send("ok FBlike page");
// }
// const FBlikeTym = async (req: Request, res: Response) => {
//      const formData = req.body;
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
//         const sendTDS= await buyTDSService(formData,"fbLikeTym");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbLikeTym",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbLikeTym");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBlike tym", req.body);
//     res.status(200).send("ok FBlike tym");
// }
// const FBlikeTymCmt = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData,"fbLikeTymCmt");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbLikeTymCmt",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbLikeTymCmt");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBlike tym cmt", req.body);
//     res.status(200).send("ok FBlike tym cmt");
// }
// const FBlikeVip = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData,"fbLikeVip");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbLikeVip",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbLikeVip");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBlike vip", req.body);
//     res.status(200).send("ok FBlike vip");
// }
// const FBshareFake = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData,"fbShareFake");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbShareFake",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbShareFake");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBshare fake", req.body);
//     res.status(200).send("ok FBshare fake");
// }
// const FBshareReal = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData,"fbShareReal");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbShareReal",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbShareReal");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBshare real", req.body);
//     res.status(200).send("ok FBshare real");
// }
// const FBviewStory = async (req: Request, res: Response) => {
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
//         const sendTDS= await buyTDSService(formData,"fbViewStory");        
//         if(sendTDS==201){
//             res.status(201).send("lỗi hệ thống, thông báo admin");
//         }
//         // lưu data vào bảng payment
//         const newPayment: any = {
//             payCode: "code",
//             paytype: "fbViewStory",
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
//         const submoneyy = await subMoneyService(formData.uid,quality*1000,"sub_fbViewStory");
//         if(submoneyy==201){
//             res.status(201).send("user không tồn tại");
//             return
//         }
//         if(submoneyy==200){
//             res.status(200).send("thành công");
//             return
//         }
//     }
//     console.log("ok FBview story", req.body);
//     res.status(200).send("ok FBview story");
// }
// export default {
//     FBcmt,
//     FBfollow,
//     FBlike,
//     FBlikePage,
//     FBlikeTym,
//     FBlikeTymCmt,
//     FBlikeVip,
//     FBshareFake,
//     FBshareReal,
//     FBviewStory
// }