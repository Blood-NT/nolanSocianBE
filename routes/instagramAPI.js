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
  const res1 = await axios.post("https://traodoisub.com/mua/instagram_comment/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
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
  //maginho,id,sl,dateTime,
  const res1 = await axios.post("https://traodoisub.com/mua/instagram_follow/themid.php", formData, {
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
  //maginho,id,sl,dateTime,
  const res1 = await axios.post("https://traodoisub.com/mua/instagram_like/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like");
  res.status(200).send("ok like");
});


router.post('/like-cmt', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  //maginho,id,sl,dateTime,
  const res1 = await axios.post("https://traodoisub.com/mua/instagram_likecmt/themid.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res1.headers['set-cookie']);
  res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like cmt");
  res.status(200).send("ok like cmt");
});





  
  module.exports = router;