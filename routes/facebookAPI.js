// Trong auth.js
const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();
const axios = require('axios');
const path = require('path');

// traodoisub

router.post('/cmt', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
//maginho,id,sl,noidung( mỗi dòng 1 mảng ),dateTime,
  const res1 = await axios.post("https://traodoisub.com/mua/comment/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      //cokie
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok cmt");
  res.status(200).send("ok cmt");
});


router.post('/follow', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  const res1 = await axios.post("https://traodoisub.com/mua/follow/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok follow");
  res.status(200).send("ok  follow");
});


router.post('/like', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,is_album,speed,dateTime,
  const res1 = await axios.post("https://traodoisub.com/mua/like/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      // cokie:
    },

  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like");
  res.status(200).send("ok like");
});


router.post('/like-page', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  const res1 = await axios.post("https://traodoisub.com/mua/fanpage/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like page");
  res.status(200).send("ok like page");
});


router.post('/like-tym', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,dateTime,loaicx,speed
  const res1 = await axios.post("https://traodoisub.com/mua/reaction/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like tym");
  res.status(200).send("ok like tym");
});


router.post('/like-tym-cmt', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,dateTime,loaicx,speed
  const res1 = await axios.post("https://traodoisub.com/mua/reactioncmt/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like tym cmt");
  res.status(200).send("ok like tym cmt");
});
router.post('/like-vip', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,dateTime,server,time_pack,packet,post
  const res1 = await axios.post("https://traodoisub.com/mua/viplike/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like vip");
  res.status(200).send("ok like vip");
});

router.post('/share-fake', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,dateTime
  const res1 = await axios.post("https://traodoisub.com/mua/shareao/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok share fake");
  res.status(200).send("ok share fake");
});


router.post('/share-real', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,dateTime
  const res1 = await axios.post("https://traodoisub.com/mua/share/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok share real");
  res.status(200).send("ok share real");
});


router.post('/view-story', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,dateTime
  const res1 = await axios.post("https://traodoisub.com/mua/viewstr/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok view story");
  res.status(200).send("ok view story");
});


module.exports = router;