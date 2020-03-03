const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

router.get('/', isLoggedIn, userCtrl.index)
router.post('/favorites/:favorite',isLoggedIn, userCtrl.handleFavorite)
router.post('/',isLoggedIn,userCtrl.addBio)
router.put('/',isLoggedIn,userCtrl.updateBio)
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}



module.exports = router