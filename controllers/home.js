const express = require('express')
const router = express.Router()
const Post = require('../models/post')


module.exports = {
    index,
}

function index(req,res){
    Post.find({}).then(function(posts){
        res.render('index',{
            title: 'ProjectMe',
            posts
        })
    })
}