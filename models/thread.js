const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../models/user')



const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reciever: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    }
},{
    timestamps: true
})







const threadSchema = new Schema({
    startUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receivingUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: [messageSchema]

},{
    timestamps: true
})



module.exports = mongoose.model('Thread',threadSchema)