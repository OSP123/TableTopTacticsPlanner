var express = require('express');
var router  = express.Router();

var strategies_controller = require('../controllers/strategy_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, strategies_controller.index);

router.post('/new', isAuthenticated, strategies_controller.createStrategy);

module.exports = router;