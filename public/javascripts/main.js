let commentButtonEls = document.querySelectorAll('.comment-button')
commentButtonEls.forEach(el=>{
    el.addEventListener('click',handleClick)
})

function handleClick(evt){
    let postId = evt.target.parentElement.parentElement.parentElement.getAttribute('data-id')
    let commentEl = document.querySelectorAll(`[data-id="${postId}"]`)[2]
    let url = `http://localhost:3000/api/comments/${postId}`
    let commentWrapperEl = commentEl.querySelector('.comments-wrapper')
    let commentContainerEls = commentWrapperEl.querySelectorAll('.comment-wrapper')
    
        fetch(url).then(fResponse=>{            
            return fResponse.json()
        }).then(data=>{
            for(let i = 0;i<=data.length-1;i++){
                let authorEl = commentContainerEls[i].querySelector('.comment-author')
                let contentEl = commentContainerEls[i].querySelector('.comment-content')
                authorEl.textContent = data[i].author
                contentEl.textContent = data[i].content
            }
        })
        if(getComputedStyle(commentEl).display==='none'){
            commentEl.style.display ='block'     
        }else{
            commentEl.style.display ='none'
        }
        

}



