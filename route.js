// Routing for Users Controller
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/users', controller.createUser);

module.exports = router;
