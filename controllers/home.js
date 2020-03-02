const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const mongoose = require('mongoose')
const categories = require('../models/categories')
module.exports = {
    index,
}

function index(req,res){
    console.log(req.user)
    Post.find({}).populate('username').then(function(posts){
        res.render('index',{
            posts,
            title: 'ProjectMe',
            user: req.user,
            categories: categories.getAll()
        })
    })
}