const mongoose = require('mongoose')
const Schema = mongoose.Schema


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
    title: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,

    },
    userId:{
        type: Number,
        // ref: 'user',
        required: true
    },
    content:{
        type: String,
        required: true,

    },comments:{
        type: [commentSchema]
        
    },
    categories: {
        type: [String],
        required: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model('Post',postSchema)