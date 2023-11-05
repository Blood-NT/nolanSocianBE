import { Request, Response } from "express";

// import multer from 'multer';
// const upload = multer();


const tiktokCmt = async (req: Request, res: Response) => {
    console.log("tiktok cmt", req.body);
    return res.status(200).send("ok tiktok cmt");
}
const tiktokFollow = async (req: Request, res: Response) => {
    console.log("tiktok follow", req.body);
    return res.status(200).send("ok tiktok follow");
}
const tiktokLikeVip = async (req: Request, res: Response) => {
    console.log("tiktok like vip", req.body);
    return res.status(200).send("ok tiktok like vip");
}
const tiktokShare = async (req: Request, res: Response) => {
    console.log("tiktok share", req.body);
    return res.status(200).send("ok tiktok share");
}
const tiktokShareLive = async (req: Request, res: Response) => {
    console.log("tiktok share live", req.body);
    return res.status(200).send("ok tiktok share live");
}
const tiktokTymVideo = async (req: Request, res: Response) => {
    console.log("tiktok tym video", req.body);
    return res.status(200).send("ok tiktok tym video");
}
const tiktokPing = async (req: Request, res: Response) => {
    console.log("tiktok ping", req.body);
    return res.status(200).send("pong");
}

export default {

    tiktokCmt,
    tiktokFollow,
    tiktokLikeVip,
    tiktokShare,
    tiktokShareLive,
    tiktokTymVideo,
    tiktokPing

}
