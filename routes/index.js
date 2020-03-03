var express = require('express');
var router = express.Router();
const homeCtrl = require('../controllers/home')
const passport = require('passport')
/* GET home page. */
router.get('/', homeCtrl.index);
router.get('/auth/google',passport.authenticate(
    'google',
    {
        scope: ['profile','email']
    }
))
router.get('/oauth2callback',passport.authenticate(
    'google',
    {
        successRedirect: '/user',
        failureRedirect: '/'
    }
))
router.get('/logout',function(req,res){
    req.logout();
    res.redirect('/')
})
module.exports = router;
