const Post = require('../models/post')
const categories = require('../models/categories')











module.exports = {
    index,
    show
}







function index(req,res){
    res.render('categories',{
        title: 'Categories',
        user: req.user,
        categories: categories.getAll()
    })
}

function show(req,res){
    Post.find({category: req.params.cat.split('-').join(' ')}).populate('username').then(posts=>{
        res.render('category',{
            posts,
            title: req.params.cat.split('-').join(' '),
            user: req.user,
            categories: categories.getAll()
        })
    })
}