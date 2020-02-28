const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/post')


router.get('/', isLoggedIn, postCtrl.index)
router.post('/', isLoggedIn, postCtrl.create)

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}




module.exports = router;