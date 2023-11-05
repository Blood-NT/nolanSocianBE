import express from 'express';
import multer from 'multer';
// import axios from 'axios';

const router = express.Router();
const upload = multer();
// const path = require('path');

router.post('/cmt', upload.none(), async (req, res) => {
    console.log("ok cmt", req.body);
    res.status(200).send("ok cmt");
});

router.post('/follow', upload.none(), async (req, res) => {
    console.log("ok follow", req.body);
    res.status(200).send("ok  follow");
});

router.post('/like-vip', upload.none(), async (req, res) => {
    console.log("ok like vip", req.body);
    res.status(200).send("ok like vip");
});

router.post('/share', upload.none(), async (req, res) => {
    console.log("ok share", req.body);
    res.status(200).send("ok share");
});

router.post('/share-live', upload.none(), async (req, res) => {
    console.log("ok share live", req.body);
    res.status(200).send("ok share live");
});

router.post('/tym-video', upload.none(), async (req, res) => {
    console.log("ok tym video", req.body);
    res.status(200).send("ok tym video");
});

router.post('/ping', upload.none(), async (req, res) => {
    console.log("ok view", req.body);
    res.status(200).send("pong");
});

export default router;
