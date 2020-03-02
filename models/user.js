const mongoose = require('mongoose')
const Schema = mongoose.Schema






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
    
})

module.exports = mongoose.model('User',userSchema)