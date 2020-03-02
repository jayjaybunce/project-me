const mongoose = require('mongoose')
const Post = require('../models/post')


module.exports = {
    create,
    delete: deleteComment,
    update
}


function create(req,res){
    console.log(req.user.username)
    console.log(req.body)
    if(req.body.commentContent){
        Post.findById(req.params.id).then(post=>{
            
            post.comments.push({
                author: req.user.username,
                content: req.body.commentContent
            })
            post.save(function(err,post){
                if(err) console.log(err)
                res.redirect('/')
            })
        })
    }else{
        res.redirect('/')
    }
}

function deleteComment(req,res){
    Post.findById(req.params.id).then(post=>{
       post.comments.forEach((comment,index)=>{
           if(comment.id===req.params.cId){
               post.comments.splice(index,1)
               
           }
       })
       post.save()
        
    }).then(index=>{
        console.log(index)
        res.redirect('/')
    }).catch(error=>{
        if(error) console.log(error)
    })
}

function update(req,res){
    Post.findById(req.params.id).then(post=>{
        post.comments.forEach(comment=>{
            console.log(comment.id===req.params.cId)
            if(comment.id===req.params.cId){
                
                comment.content = req.body.content
            }
        })
        post.save()
    }).catch(error=>{
        if(error) console.log(error)
    })
    
    res.redirect('/')
}