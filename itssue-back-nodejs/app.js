const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sql = require("./src/util/db.js");
const PORT = 3000;

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('itssue-back-end');
});

app.listen(PORT, () => {
    console.log("Server is running on port 3000.");
});

module.exports = app;
