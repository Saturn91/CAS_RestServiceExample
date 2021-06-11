const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(router);

app.listen(3000, function() {
    console.log('Webservice started at: 127.0.0.1:3000');
});

router.get('/', function(req, res) {
    res.send('hello rest');
});