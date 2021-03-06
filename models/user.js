const mongoose = require('mongoose')
const Schema = mongoose.Schema






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
        ref: 'User',
        required: true
    },
    receivingUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    messages: [messageSchema]

},{
    timestamps: true
})



const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar:{
        type: String,
        require: true,
    },
    googleId: String,
    favorites: [String],
    bio: String,
    threads: [threadSchema]
    
    
    
})

module.exports = mongoose.model('User',userSchema)