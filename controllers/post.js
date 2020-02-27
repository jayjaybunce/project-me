const mongoose = require('mongoose')
const Post = require('../models/post')

module.exports = {
    new: newPost,
    create
}


function newPost(req,res){
    
}
function create(req,res){
    const post = new Post(req.body)
    post.save(function(err,movie){
        if(err) console.log(err)
        res.status(200).json(post)
    })
    console.log(post)
    
}










