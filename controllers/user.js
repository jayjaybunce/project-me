const User = require('../models/user')
const Post = require('../models/post')
const categories = require('../models/categories')
module.exports = {
    index,
    handleFavorite,
    addBio,
    updateBio,
    show
}

function show(req,res){
    Post.findById(req.params.id).populate('username').then(post=>{
        
        Post.find({"username":post.username.id}).then(posts=>{
            
            res.render('show-user',{
            title: 'Profile',
            otherUser: post.username.toObject(),
            posts,
            user: req.user
            })
        
        })
            
        
    })
}

function handleFavorite(req,res){
    
    
    if(req.user.favorites.includes(req.params.favorite)){
        req.user.favorites.forEach((favorite,index)=>{
            if(favorite===req.params.favorite){
                req.user.favorites.splice(index,1)
                req.user.save()
            }
        })
    }else{
        req.user.favorites.push(req.params.favorite)
        req.user.save()
    }
    res.redirect('/categories')
}
function addBio(req,res){
    user = req.user
    user.bio = req.body.bio
    user.save()
    res.redirect('/user')
}
function updateBio(req,res){
    user = req.user
    user.bio = req.body.bio
    user.save()
    res.redirect('/user')
}
function index(req,res){
    Post.find({"username": req.user.id}).then(posts=>{
        console.log(posts)
        res.render('user',{
            user: req.user,
            posts,
            title: 'Profile',
            categories: categories.getAll()

        })
    })
    
}