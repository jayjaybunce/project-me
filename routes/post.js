const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/post')
const commentsCtrl = require('../controllers/comments')

router.get('/', isLoggedIn, postCtrl.index)
router.post('/', isLoggedIn, postCtrl.create)
router.delete('/:id', isLoggedIn , postCtrl.delete)
router.post('/:id/comments', isLoggedIn, commentsCtrl.create)
router.delete('/:id/comments/:cId',isLoggedIn,commentsCtrl.delete)
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}





module.exports = router;