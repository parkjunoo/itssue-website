const express = require('express');
const router = express.Router();
const controller = require('../../controller/home.controller');

router.get('/', controller.home);
router.get('/login', controller.login);

module.exports = router;
