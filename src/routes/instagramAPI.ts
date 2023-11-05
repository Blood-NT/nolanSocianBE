import express from 'express';
import instagramController from '../controller/instagramController';

const router = express.Router();
router.post('/cmt', instagramController.instagram_comment);
router.post('/follow', instagramController.instagram_follow);
router.post('/like', instagramController.instagram_like);
router.post('/like-cmt', instagramController.instagram_likecmt);
router.post('/ping', instagramController.instagram_ping);

export default router;