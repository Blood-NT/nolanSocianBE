// Trong auth.js
const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();
const axios = require('axios');
const path = require('path');


// traodoisub


router.post('/cmt', upload.none(), async (req, res) => {
  // const formData = req.body;
  // console.log('Dữ liệu từ FormData:', formData);
  // const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  // console.log(res1.headers['set-cookie']);
  // res.status(200).send(res1.headers['set-cookie']);
  console.log("ok cmt");
  res.status(200).send("ok cmt");
});


router.post('/follow', upload.none(), async (req, res) => {
  // const formData = req.body;
  // console.log('Dữ liệu từ FormData:', formData);
  // const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  // console.log(res1.headers['set-cookie']);
  // res.status(200).send(res1.headers['set-cookie']);
  console.log("ok follow");
  res.status(200).send("ok  follow");
});


router.post('/like-vip', upload.none(), async (req, res) => {
  // const formData = req.body;
  // console.log('Dữ liệu từ FormData:', formData);
  // const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  // console.log(res1.headers['set-cookie']);
  // res.status(200).send(res1.headers['set-cookie']);
  console.log("ok like vip");
  res.status(200).send("ok like vip");
});

router.post('/share', upload.none(), async (req, res) => {
  // const formData = req.body;
  // console.log('Dữ liệu từ FormData:', formData);
  // const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  // console.log(res1.headers['set-cookie']);
  // res.status(200).send(res1.headers['set-cookie']);
  console.log("ok share");
  res.status(200).send("ok share");
});


router.post('/share-live', upload.none(), async (req, res) => {
  // const formData = req.body;
  // console.log('Dữ liệu từ FormData:', formData);
  // const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  // console.log(res1.headers['set-cookie']);
  // res.status(200).send(res1.headers['set-cookie']);
  console.log("ok share live");
  res.status(200).send("ok share live");
});

router.post('/tym-video', upload.none(), async (req, res) => {
  // const formData = req.body;
  // console.log('Dữ liệu từ FormData:', formData);
  // const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  // console.log(res1.headers['set-cookie']);
  // res.status(200).send(res1.headers['set-cookie']);
  console.log("ok tym video");
  res.status(200).send("ok tym video");
});


router.post('/view', upload.none(), async (req, res) => {
  // const formData = req.body;
  // console.log('Dữ liệu từ FormData:', formData);
  // const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  // console.log(res1.headers['set-cookie']);
  // res.status(200).send(res1.headers['set-cookie']);
  console.log("ok view");
  res.status(200).send("ok view");
});

  
  module.exports = router;