// import express, { Router, Request, Response } from 'express';
// import multer from 'multer';
// import axios from 'axios';

// const router: Router = express.Router();
// const upload = multer();
// // const path = require('path');

// router.post('/cmt', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/comment/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             //cokie
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok cmt");
//     res.status(200).send("ok cmt");
// });

// router.post('/follow', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/follow/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok follow");
//     res.status(200).send("ok  follow");
// });

// router.post('/like', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/like/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             // cokie:
//         },

//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok like");
//     res.status(200).send("ok like");
// });

// router.post('/like-page', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/fanpage/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok like page");
//     res.status(200).send("ok like page");
// });

// router.post('/like-tym', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/reaction/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok like tym");
//     res.status(200).send("ok like tym");
// });

// router.post('/like-tym-cmt', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/reactioncmt/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok like tym cmt");
//     res.status(200).send("ok like tym cmt");
// });

// router.post('/like-vip', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/viplike/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok like vip");
//     res.status(200).send("ok like vip");
// });

// router.post('/share-fake', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/shareao/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok share fake");
//     res.status(200).send("ok share fake");
// });

// router.post('/share-real', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/share/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok share real");
//     res.status(200).send("ok share real");
// });

// router.post('/view-story', upload.none(), async (req: Request, res: Response) => {
//     const formData = req.body;
//     console.log('Dữ liệu từ FormData:', formData);
//     const res1 = await axios.post("https://traodoisub.com/mua/viewstr/themid.php", formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     });
//  //     console.log(res1.headers['set-cookie']);
// //    res.status(200).send(res1.headers['set-cookie']);
//     console.log("ok view story");
//     res.status(200).send("ok view story");
// });

// export default router;



import express, { Router, Request, Response } from 'express';
import multer from 'multer';

const router: Router = express.Router();
const upload = multer();
// const path = require('path');

router.post('/cmt', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
   
   console.log("ok cmt");
    res.status(200).send("ok cmttt");
});

router.post('/follow', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok follow");
    res.status(200).send("ok  follow");
});

router.post('/like', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
    res.status(200).send("ok like");
});

router.post('/like-page', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok like page");
    res.status(200).send("ok like page");
});

router.post('/like-tym', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok like tym");
    res.status(200).send("ok like tym");
});

router.post('/like-tym-cmt', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok like tym cmt");
    res.status(200).send("ok like tym cmt");
});

router.post('/like-vip', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok like vip");
    res.status(200).send("ok like vip");
});

router.post('/share-fake', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok share fake");
    res.status(200).send("ok share fake");
});

router.post('/share-real', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok share real");
    res.status(200).send("ok share real");
});

router.post('/view-story', upload.none(), async (req: Request, res: Response) => {
    const formData = req.body;
    console.log('Dữ liệu từ FormData:', formData);
        
    console.log("ok view story");
    res.status(200).send("ok view story");
});

export default router;
