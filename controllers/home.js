const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const mongoose = require('mongoose')

module.exports = {
    index,
}

function index(req,res){
    Post.find({}).populate('username').then(function(posts){
        res.render('index',{
            posts,
            title: 'ProjectMe',
            user: req.user
        })
    })
}