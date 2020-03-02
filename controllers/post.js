const mongoose = require('mongoose')
const Post = require('../models/post')

module.exports = {
    create,
    index,
    delete: deletePost,
    update,
    show
}


function deletePost(req,res){
    Post.findById(req.params.id).then(post=>{
        post.remove()
        res.redirect('/')
    })
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
    Post.find({"username": req.user._id}).populate('username').then(function(posts){
        res.render('posts',{
            posts,
            title: 'Posts',
            user: req.user
        })
    })
}

function update(req,res){
    Post.findByIdAndUpdate(req.params.id,req.body).then(post=>{
        console.log(post)
        res.redirect('/')
    })
}
function show(req,res){
    Post.findById(req.params.id).populate('username').then(post=>{
        res.render('show',{
            title: 'Post',
            post,
            user: req.user
        })    
    })

}









