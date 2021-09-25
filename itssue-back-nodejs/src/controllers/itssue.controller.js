const Keyword = require('../models/keyword.model.js');
const Ranking = require('../models/ranking.model.js');


const view = {
    home: (req, res) => {
        res.render('home/index');
    },

    login: (req, res) => {
        res.render('home/login');
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    }
}

module.exports = {
    view,
    process
}