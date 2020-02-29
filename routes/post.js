const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/post')
const commentsCtrl = require('../controllers/comments')

router.get('/', isLoggedIn, postCtrl.index)
router.post('/', isLoggedIn, postCtrl.create)
router.post('/:id/comments', isLoggedIn, commentsCtrl.create)
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}




module.exports = router;