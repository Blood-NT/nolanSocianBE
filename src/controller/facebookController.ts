import { Request, Response } from 'express';
import { buyTDSService } from '../service/TDSService';

const FBcmt = async (req: Request, res: Response) => {
    // goij API tds
    const sendTDS = await buyTDSService(req.body, "fbCmt");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }


}
const FBfollow = async (req: Request, res: Response) => {
    console.log("FBfollow", req.body);
    const sendTDS = await buyTDSService(req.body, "fbFollow");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}


const FBlike = async (req: Request, res: Response) => {
    console.log("FBlike", req.body);
    const sendTDS = await buyTDSService(req.body, "fbLike");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const FBlikePage = async (req: Request, res: Response) => {
    console.log("FBlikePage", req.body);
    const sendTDS = await buyTDSService(req.body, "fbLikePage");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const FBlikeTym = async (req: Request, res: Response) => {
    console.log("FBlikeTym", req.body);
    const sendTDS = await buyTDSService(req.body, "fbLikeTym");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const FBlikeTymCmt = async (req: Request, res: Response) => {
    console.log("FBlikeTymCmt", req.body);
    const sendTDS = await buyTDSService(req.body, "fbLikeTymCmt");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const FBlikeVip = async (req: Request, res: Response) => {
    console.log("FBlikeVip", req.body);
    const sendTDS = await buyTDSService(req.body, "fbLikeVip");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const FBshareFake = async (req: Request, res: Response) => {
    console.log("FBshareFake", req.body);
    const sendTDS = await buyTDSService(req.body, "fbShareFake");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const FBshareReal = async (req: Request, res: Response) => {
    console.log("FBshareReal", req.body);
    const sendTDS = await buyTDSService(req.body, "fbShareReal");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
const FBviewStory = async (req: Request, res: Response) => {
    console.log("FBviewStory", req.body);
    const sendTDS = await buyTDSService(req.body, "fbViewStory");
    if (sendTDS == 201) {
        res.status(201).send("lỗi hệ thống, thông báo admin");
    }
}
export default {
    FBcmt,
    FBfollow,
    FBlike,
    FBlikePage,
    FBlikeTym,
    FBlikeTymCmt,
    FBlikeVip,
    FBshareFake,
    FBshareReal,
    FBviewStory
}