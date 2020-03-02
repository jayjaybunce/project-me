const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

router.get('/',userCtrl.index)
router.post('/favorites/:favorite',userCtrl.handleFavorite)




module.exports = router