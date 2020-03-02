const User = require('../models/user')
const Post = require('../models/post')
const categories = require('../models/categories')
module.exports = {
    index,
    handleFavorite,
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