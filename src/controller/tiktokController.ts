import { Request, Response } from "express";
import { buyTiktokServicer } from "../service/TDSService";

const tiktokCmt = async (req: Request, res: Response) => {
    console.log("tiktokCmt", req.body);
    const sendTDS = await buyTiktokServicer(req.body, "tiktokCmt");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const tiktokFollow = async (req: Request, res: Response) => {
    console.log("tiktokFollow", req.body);
    const sendTDS = await buyTiktokServicer(req.body, "tiktokFollow");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const tiktokLikeVip = async (req: Request, res: Response) => {
    console.log("tiktokLikeVip", req.body);
    const sendTDS = await buyTiktokServicer(req.body, "tiktokLikeVip");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const tiktokShare = async (req: Request, res: Response) => {
    console.log("tiktokShare", req.body);
    const sendTDS = await buyTiktokServicer(req.body, "tiktokShare");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}

const tiktokTymVideo = async (req: Request, res: Response) => {
    console.log("tiktokTymVideo", req.body);
    const sendTDS = await buyTiktokServicer(req.body, "tiktokTymVideo");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
export default {

    tiktokCmt,
    tiktokFollow,
    tiktokLikeVip,
    tiktokShare,
    tiktokTymVideo,

}
