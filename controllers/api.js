const express = require('express')
const Post = require('../models/post')
module.exports = {
    getPostCommentsById,
}
function getPostCommentsById(req,res){
    Post.findOne({'_id': req.params.id}).then(post=>{
        comments = post.comments
        res.status(200).json(comments)
    })
}