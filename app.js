import bookRouter from './routes/bookroutes.js'
import express from 'express';

const app = express();
const router = express.Router();

app.use(bookRouter);

app.listen(3000, function() {
    console.log('Webservice started at: 127.0.0.1:3000');
});
