const express = require('express');

const app = express();
const router = express.Router();

app.use(router);

app.listen(3000, function() {
    console.log('Webservice started at: 127.0.0.1:3000');
});

router.get('/book', function(req, res) {
    res.send('harry potter');
});

router.get('/book/add', (req, res) => {
    const enteredBook = req.query.book;
    res.send(`${enteredBook} was added to the library`);
});