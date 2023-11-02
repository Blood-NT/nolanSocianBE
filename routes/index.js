const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const axios = require('axios');
const path = require('path');
const cookieParser = require('cookie-parser');
const userAPI = require('./userAPI');
const facebookAPI = require('./facebookAPI');
const tiktokAPI = require('./tiktokAPI');
const instagramAPI = require('./instagramAPI');
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));


router.use("/user", userAPI);
router.use("/facebook", facebookAPI);
router.use("/tiktok", tiktokAPI);
router.use("/instagram", instagramAPI);





router.post('/upload', upload.none(), async (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormData:', formData);
  const res1 = await axios.post("https://traodoisub.com/scr/login.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
    console.log(res1.headers['set-cookie']); 
  res.status(200).send(res1.headers['set-cookie']);
});

router.post('/upload2', (req, res) => {
  const formData = req.body;
  console.log('Dữ liệu từ FormDataa:', formData);
  res.status(200).send('Dữ liệu đã được nhận và xử lý thành công.');
});

module.exports = router;
