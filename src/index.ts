import express, { Application } from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

import sequelize from './config/connectDB';
const app: Application = express();

const port = 8083;

app.set('port', port);
app.use(bodyParser.json());
app.use('/', routes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log(sequelize.authenticate());