const mongoose = require('mongoose')
const Post = require('../models/post')

module.exports = {
    new: newPost,
    create,
    index
}


function newPost(req,res){
    
}
function create(req,res){
    let newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        username: req.user.id,
        googleId: req.user.googleId,
        category: req.body.category
    })
    newPost.save(function(err,post){
        if(err){
            console.log(err)
            res.redirect('/posts')
        }else{

            res.redirect('/posts')
        }
    })
    
}

function getUserPosts(req,res){
    Post.find({'_id': req.params.id})
}

function index(req,res){
    console.log(req.user._id)
    Post.find({"username": req.user._id}).populate('username').then(function(posts){
        console.log(posts)
        res.render('posts',{
            posts,
            title: `${req.user.username}`,
            user: req.user
        })
    })
}










