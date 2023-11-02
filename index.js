const express = require('express');
const app = express();
const port = 8083;
const routes = require('./routes'); // Import tệp routes.js
const bodyParser = require('body-parser');
app.set('port', port);
app.use(bodyParser.json());
app.use('/', routes); // Sử dụng tất cả các tuyến đường từ tệp routes.js

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
