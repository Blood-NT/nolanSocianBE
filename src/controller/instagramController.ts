
import { Request, Response } from 'express';
import { buyINSServicer } from '../service/TDSService';

const instagram_comment = async (req: Request, res: Response) => {
    console.log("instagram_comment", req.body);
    const sendTDS = await buyINSServicer(req.body, "insCmt");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const instagram_follow = async (req: Request, res: Response) => {
    console.log("instagram_follow", req.body);
    const sendTDS = await buyINSServicer(req.body, "insFollow");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const instagram_like = async (req: Request, res: Response) => {
    console.log("instagram_like", req.body);
    const sendTDS = await buyINSServicer(req.body, "insLike");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const instagram_likecmt = async (req: Request, res: Response) => {
    console.log("instagram_likecmt", req.body);
    const sendTDS = await buyINSServicer(req.body, "insLikeCmt");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}


export default {
    instagram_comment,
    instagram_follow,
    instagram_like,
    instagram_likecmt,
}