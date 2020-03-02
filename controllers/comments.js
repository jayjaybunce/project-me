const mongoose = require('mongoose')
const Post = require('../models/post')


module.exports = {
    create,
}


function create(req,res){
    if(req.body.content){
        Post.findById(req.params.id).then(post=>{
            post.comments.push({
                author: req.user.username,
                content: req.body.commentContent
            })
            post.save(function(err,post){
                if(err) console.log(err)
                console.log(post)
                res.redirect('/')
            })
        })
    }else{
        res.redirect('/')
    }
}