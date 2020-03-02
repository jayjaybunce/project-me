const express = require('express')
const router = express.Router()
const apiCtrl = require('../controllers/api')

router.get('/comments/:id',apiCtrl.getPostCommentsById)

module.exports = router


