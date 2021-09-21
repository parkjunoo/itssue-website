const express = require('express');
const router = express.Router();
const controller = require('../../controller/home.controller');

router.get('/', controller.view.home);
router.get('/login', controller.view.login);
router.post('/login', controller.process.login);

module.exports = router;
