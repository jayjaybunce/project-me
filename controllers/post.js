const mongoose = require('mongoose')
const Post = require('../models/post')

module.exports = {
    create,
    index,
    delete: deletePost,
    update,
    show,
    handleLike,
    handleCommentLike
}




function handleCommentLike(req,res){
    Post.findById(req.params.id).then(post=>{
        post.comments.forEach(comment=>{
            if(comment.id===req.params.cId){
                if(comment.likedBy.includes(req.user.id)){
                    comment.likedBy.forEach((like,index)=>{
                        if(like.toString()===req.user.id){
                            comment.likedBy.splice(index,1)
                        }
                    })
                }else{
                    comment.likedBy.push(req.user.id)
                }
            }
        })
        post.save()
        res.redirect('/posts')
    })
}


function deletePost(req,res){
    Post.findById(req.params.id).then(post=>{
        post.remove()
        res.redirect('/')
    })
}
function handleLike(req,res){
    Post.findById(req.params.id).then(post=>{
        if(post.likedBy.includes(req.user._id)){
            post.likedBy.forEach((like,index)=>{
                if(like.toString()===req.user._id.toString()){
                    if(post.likedBy.length===1){
                        return post.likedBy = []
                    }else{
                        post.likedBy.splice(index,1)
                        return;
                    }
                }
            })
        }else{
            post.likedBy.push(req.user._id)
        }
        post.save()
    })
    res.redirect(`/posts/${req.params.id}`)
}

function create(req,res){
    console.log(req.body)
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









