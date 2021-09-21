const mysql = require("mysql");

const db = mysql.createConnection({
    host: "itssue-db.cz8bb9vishif.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "!Qkrwnstn13",
    database: "login_lecture",
});

db.connect();

module.exports = db;