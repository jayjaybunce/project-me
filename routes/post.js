const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/post')
const commentsCtrl = require('../controllers/comments')
const userCtrl = require('../controllers/user')


router.get('/', isLoggedIn, postCtrl.index)
router.get('/:id/author', userCtrl.show)
router.post('/', isLoggedIn, postCtrl.create)
router.post('/:id',isLoggedIn, postCtrl.handleLike)
router.post('/:id/comments/:cId',postCtrl.handleCommentLike)
router.get('/:id',postCtrl.show)
router.delete('/:id', isLoggedIn , postCtrl.delete)
router.post('/:id/comments', isLoggedIn, commentsCtrl.create)
router.delete('/:id/comments/:cId',isLoggedIn,commentsCtrl.delete)
router.put('/:id/comments/:cId', isLoggedIn,commentsCtrl.update)
router.put('/:id',isLoggedIn,postCtrl.update)
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google')
}





module.exports = router;