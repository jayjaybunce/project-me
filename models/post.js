const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    author:{
        type: String,
        required: true
    },
    authorId:{
        type: Number,
        required: true
    },
    content:{
        type: String
    }
})

const postSchema = new Schema({
    author:{
        type: String,
        required: true,

    },
    authorId:{
        type: Number,
        required: true
    },
    content:{
        type: String,
        required: true,

    },comments:{
        type: [commentSchema]
        
    }
},{
    timestamps: true
})


module.express = mongoose.model('Post',postSchema)