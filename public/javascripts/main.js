let commentButtonEls = document.querySelectorAll('.comment-button')
commentButtonEls.forEach(el=>{
    el.addEventListener('click',handleClick)
})
let editButtonEls = document.querySelectorAll('.edit-button')
editButtonEls.forEach(el=>{
    el.addEventListener('click',handleEdit)
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
            console.log(data)
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

function handleEdit(evt){
    let postContentEl = evt.target.parentElement.parentElement.parentElement
    let pId = postContentEl.getAttribute('data-id')
    let postContent = evt.target.parentElement.parentElement.parentElement.querySelector('.post-p').textContent
    let postElement = evt.target.parentElement.parentElement.parentElement.querySelector('.post-p')
    // where post content lives evt.target.parentElement.parentElement.parentElement.querySelector('.post-p')
    postElement.style.display = 'none'
    let textEl = document.createElement('textarea')
    let updateButtonForm = document.createElement('form')
    let updateButtonEl = document.createElement('button')
    updateButtonEl.setAttribute('type','submit')
    updateButtonEl.setAttribute('class','update-post-button')
    updateButtonEl.textContent = 'Update'
    updateButtonForm.setAttribute('action',`/posts/${pId}?_method=PUT`)
    updateButtonForm.setAttribute('method','POST')
    updateButtonForm.setAttribute('class','update-post-form')
    textEl.textContent = postContent.trim()
    textEl.setAttribute('class','edit-post-textarea')
    updateButtonForm.appendChild(textEl)
    postContentEl.appendChild(updateButtonForm)
    updateButtonForm.appendChild(updateButtonEl)
    
    


}



