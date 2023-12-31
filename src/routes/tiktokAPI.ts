import express from 'express';


import tiktokController from '../controller/tiktokController';
// import axios from 'axios';

const router = express.Router();
// const path = require('path');

router.post('/cmt', tiktokController.tiktokCmt);

router.post('/follow', tiktokController.tiktokFollow);

router.post('/like-vip', tiktokController.tiktokLikeVip);

router.post('/share', tiktokController.tiktokShare);


router.post('/tym-video', tiktokController.tiktokTymVideo);


export default router;
