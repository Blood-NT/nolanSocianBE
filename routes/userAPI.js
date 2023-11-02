// Trong auth.js
const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();
const axios = require('axios');
const path = require('path');
// import  login  from '../controllers/usercontroller.js';

// traodoisub

router.post('/login',(req, res) => {
  console.log("nolanok");

  // login(req, res);

  console.log(req.body);
  res.status(200).send(req.data);

});
router.post('/register', (req, res) => {
  // Xử lý tuyến đường đăng ký
});


module.exports = router;