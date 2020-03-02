const User = require('../models/user')


module.exports = {
    index,
    handleFavorite,
}

function handleFavorite(req,res){
    if(req.user.favorites.includes(req.params.favorite)){
        req.user.favorites.forEach((favorite,index)=>{
            if(favorite===req.params.favorite){
                req.user.favorites.splice(index,1)
                req.user.save()
            }
        })
    }else{
        req.user.favorites.push(req.params.favorite)
        req.user.save()
    }
    res.redirect('/')
}

function index(req,res){

}