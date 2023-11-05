
import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';

const instagram_comment = async (req: Request, res: Response) => {
    console.log("ok  instagramcmt", req.body);
    res.status(200).send("ok  instagramcmt");
}
const instagram_follow = async (req: Request, res: Response) => {
    console.log("ok  instagramfollow", req.body);
    res.status(200).send("ok  instagram follow");
}
const instagram_like = async (req: Request, res: Response) => {
    console.log("ok  instagramlike", req.body);
    res.status(200).send("ok  instagramlike");
}
const instagram_likecmt = async (req: Request, res: Response) => {
    console.log("ok  instagramlike cmt", req.body);
    res.status(200).send("ok  instagramlike cmt");
}
const instagram_ping = async (req: Request, res: Response) => {
    console.log("ok  instagramping", req.body);
    res.status(200).send("pong");
}

export default {
    instagram_comment,
    instagram_follow,
    instagram_like,
    instagram_likecmt,
    instagram_ping
}