const express = require('express');

const app = express();
const router = express.Router();

app.use(router);

app.listen(3000, function() {
    console.log('Webservice started at: 127.0.0.1:3000');
});

router.get('/', function(req, res) {
    res.send('hello rest');
});