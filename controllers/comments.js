const mongoose = require('mongoose')
const Post = require('../models/post')


module.exports = {
    create,
}


function create(req,res){
    // console.log('comment content',req.body.commentContent)
    console.log(req.user.username,req.user.googleId)
    Post.findById(req.params.id).then(post=>{
        post.comments.push({
            author: req.user.username,
            googleId: req.user.googleId,
            content: req.body.commentContent,
        })
        post.save(function(err,post){
            if(err) console.log(err)
            console.log(post)
            res.redirect('/')
        })
        
    
    })
}