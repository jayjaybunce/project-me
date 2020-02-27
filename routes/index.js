var express = require('express');
var router = express.Router();
const homeCtrl = require('../controllers/home')
/* GET home page. */
router.get('/', homeCtrl.index);

module.exports = router;
