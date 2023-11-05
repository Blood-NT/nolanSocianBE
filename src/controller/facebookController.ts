import { Request, Response } from 'express';


const FBcmt = async (req: Request, res: Response) => {
    console.log("ok FBcmt", req.body);
    res.status(200).send("ok FBcmttt");
}
const FBfollow = async (req: Request, res: Response) => {
    console.log("ok FBfollow", req.body);
    res.status(200).send("ok FBfollow");
}
const FBlike = async (req: Request, res: Response) => {
    console.log("ok FBlike", req.body);
    res.status(200).send("ok FBlike");
}
const FBlikePage = async (req: Request, res: Response) => {
    console.log("ok FBlike page", req.body);
    res.status(200).send("ok FBlike page");
}
const FBlikeTym = async (req: Request, res: Response) => {
    console.log("ok FBlike tym", req.body);
    res.status(200).send("ok FBlike tym");
}
const FBlikeTymCmt = async (req: Request, res: Response) => {
    console.log("ok FBlike tym cmt", req.body);
    res.status(200).send("ok FBlike tym cmt");
}
const FBlikeVip = async (req: Request, res: Response) => {
    console.log("ok FBlike vip", req.body);
    res.status(200).send("ok FBlike vip");
}
const FBshareFake = async (req: Request, res: Response) => {
    console.log("ok FBshare fake", req.body);
    res.status(200).send("ok FBshare fake");
}
const FBshareReal = async (req: Request, res: Response) => {
    console.log("ok FBshare real", req.body);
    res.status(200).send("ok FBshare real");
}
const FBviewStory = async (req: Request, res: Response) => {
    console.log("ok FBview story", req.body);
    res.status(200).send("ok FBview story");
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