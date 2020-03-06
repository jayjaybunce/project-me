const Thread = require('../models/thread')
const User = require('../models/user')

module.exports = {
    index,
    newThread,
    newMessage
}
//doc.populate("arr.0.path")

function index(req,res){
    User.findById(req.user.id).populate('threads.startUser threads.receivingUser').then(user=>{

        res.render('messages',{
            threads: user.threads,
            title: 'Messages',
            user: user
        })
    })
        
        
        
    
    
}
function newThread(req,res){
    console.log(`creating new thread`)
    User.findOne({username: req.body.name}).then(recUser=>{      
        let thread = new Thread({
            receivingUser: recUser._id,
            startUser: req.user._id,
            messages: []  
        })
        req.user.threads.push(thread)
        req.user.save()
        res.redirect('/user/threads')
    }).catch(error=>{
        if(error) res.redirect('/user/threads')
    })
}

function newMessage(req,res){

}

// // .populate({
//   path: 'b', 
//   model: 'B',
//   populate: {
//     path: 'c',
//     model: 'C'
//   }
// })