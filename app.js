const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res, next) => {
    res.render('home');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
});