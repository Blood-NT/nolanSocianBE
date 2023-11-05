import express from 'express';

import facebookController from '../controller/facebookController';

const router = express.Router();
router.post('/cmt', facebookController.FBcmt);
router.post('/follow', facebookController.FBfollow);
router.post('/like', facebookController.FBlike);
router.post('/like-page', facebookController.FBlikePage);
router.post('/like-tym', facebookController.FBlikeTym);
router.post('/like-tym-cmt', facebookController.FBlikeTymCmt);
router.post('/like-vip', facebookController.FBlikeVip);
router.post('/share-fake', facebookController.FBshareFake);
router.post('/share-real', facebookController.FBshareReal);
router.post('/view-story', facebookController.FBviewStory);

export default router;
