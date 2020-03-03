

let commentButtonEls = document.querySelectorAll('.comment-button')
commentButtonEls.forEach(el=>{
    el.addEventListener('click',handleClick)
})
let editPostButtonEls = document.querySelectorAll('.edit-button')
editPostButtonEls.forEach(el=>{
    el.addEventListener('click',handlePostEdit)
})


let editCommentButtonEls = document.querySelectorAll('.comment-edit-button')
editCommentButtonEls.forEach(el=>{
    el.addEventListener('click',handleCommentEdit)
})
function handleClick(evt){
    let postId = evt.target.parentElement.parentElement.parentElement.getAttribute('data-id')
    let commentEl = document.querySelectorAll(`[data-id="${postId}"]`)[2]
    let url = `https://mighty-stream-89823.herokuapp.com/api/comments/${postId}`
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

function handlePostEdit(evt){
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
    textEl.setAttribute('name','content')
    textEl.textContent = postContent.trim()
    textEl.setAttribute('class','edit-post-textarea')
    updateButtonForm.appendChild(textEl)
    postContentEl.appendChild(updateButtonForm)
    updateButtonForm.appendChild(updateButtonEl)
}


function handleCommentEdit(evt){
    let parent = evt.target.parentElement.parentElement.querySelector('.edit-form-container')
    console.log(parent)
    let commentContentEl = evt.target.parentElement.parentElement.querySelector('.comment-content')
    let commentText = evt.target.parentElement.parentElement.querySelector('.comment-content').textContent.trim()
    let cId = evt.target.getAttribute('data-id')
    let pId = evt.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id')
    let textAreaEl = document.createElement('textarea')
    let editCommentForm = document.createElement('form')
    let editButtonEl = document.createElement('button')
    editButtonEl.setAttribute('type','submit')
    editButtonEl.setAttribute('class','edit-comment-button')
    editButtonEl.textContent = 'Update'
    commentContentEl.style.display = 'none'
    editCommentForm.setAttribute('action',`/posts/${pId}/comments/${cId}?_method=PUT`)
    editCommentForm.setAttribute('method','POST')
    editCommentForm.setAttribute('class','edit-comment-form')
    textAreaEl.textContent = commentText
    textAreaEl.setAttribute('class','edit-comment-input')
    textAreaEl.setAttribute('name','content')
    editCommentForm.appendChild(textAreaEl)
    editCommentForm.appendChild(editButtonEl)
    parent.appendChild(editCommentForm)
    
}
