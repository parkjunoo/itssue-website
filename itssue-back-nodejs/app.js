const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const home = require('./routes/home');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home);

module.exports = app;
