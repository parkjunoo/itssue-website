const sql = require("./db.js");

const Keyword = function (keywords) {
    this.keyword = keywords.keyword;
    this.rank = keywords.rank;
};

module.exports = Keyword;