

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
let searchInputEl = document.querySelector('#search-bar-input')
let postEls = document.querySelectorAll('.post-p')

searchInputEl.addEventListener('input',handleSearch)
let catEls = document.querySelectorAll('.category-container')

if(postEls.length!==0){
    postEls.forEach(post=>{
        if(post.textContent.includes('http')){

            function urlify(text) {
                var urlRegex = /(https?:\/\/[^\s]+)/g;
                return text.replace(urlRegex, function(url) {
                    return '<a href="' + url + '" target="_blank">' + url + '</a>';
                })
                // or alternatively
                // return text.replace(urlRegex, '<a href="$1">$1</a>')
            }
            
            var text = post.textContent;
            var html = urlify(text);
            post.innerHTML = html
            console.log(html)
        }
    })
}

        
function handleSearch(evt){
    if(postEls.length ===0){
        
        let value = searchInputEl.value 
        catEls.forEach(el=>{
            if(el.textContent.toLowerCase().includes(value.toLowerCase())){
                el.style.display = 'block'
            }else if(value===""){
                el.style.display = 'block'
            }else{
                el.style.display = 'none'
            }
        })
    }else{
        let value = searchInputEl.value    
       postEls.forEach(el=>{
            let searchAbleContent = el.parentElement.querySelector('#author-profile h3').textContent + 
            el.parentElement.querySelector('.post-footer').textContent+
            el.textContent+el.parentElement.querySelector('.post-title').textContent
           if(searchAbleContent.toLowerCase().includes(value.toLowerCase())){
               el.parentElement.style.display = 'grid'
           }else if(value===""){
                el.parentElement.style.display = 'grid'
           }else{
               el.parentElement.style.display = 'none'
           }
       })
    }
}
// https://blabs-project-me.herokuapp.com
// http://localhost:3000
function handleClick(evt){
    let postId = evt.target.parentElement.parentElement.parentElement.getAttribute('data-id')
    let commentEl = document.querySelectorAll(`[data-id="${postId}"]`)[2]
    let url = `https://blabs-project-me.herokuapp.com/api/comments/${postId}`
    let commentWrapperEl = commentEl.querySelector('.comments-wrapper')
    let commentContainerEls = commentWrapperEl.querySelectorAll('.comment-wrapper')
    commentContainerEls.forEach(el=>{
        if(el.getAttribute('data-id')!=='filled'){
            fetch(url).then(fResponse=>{            
                return fResponse.json()
            }).then(data=>{
                
                for(let i = 0;i<=data.length-1;i++){
                    let authorEl = commentContainerEls[i].querySelector('.comment-author')
                    let contentEl = commentContainerEls[i].querySelector('.comment-content')
                    authorEl.textContent = data[i].author
                    contentEl.textContent = data[i].content
                    commentContainerEls[i].setAttribute('data-id','filled')
                }
            })
            if(getComputedStyle(commentEl).display==='none'){
                commentEl.style.display ='block'     
            }else{
                commentEl.style.display ='none'
            }
        }else{
            if(getComputedStyle(commentEl).display==='none'){
                commentEl.style.display ='block'     
            }else{
                commentEl.style.display ='none'
            }
        }
    
        
})
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
if(document.querySelector('#user-profile-about')){
    if(document.querySelector('#write-bio-button')){
        let writeButtonEl = document.querySelector('#write-bio-button')
        writeButtonEl.addEventListener('click',handleProfileClick)
    }else{
        let updateButtonEl = document.querySelector('#update-bio-button')
        updateButtonEl.addEventListener('click',handleProfileUpdate)
    }
}
function handleProfileClick(evt){
    let profileContainer = document.querySelector('#user-profile-container')
    let bioForm = document.createElement('form')
    bioForm.setAttribute('method','POST')
    bioForm.setAttribute('class','bio-form')
    bioForm.setAttribute('action',`/user`)
    let bioTextEl = document.createElement('textarea')
    bioTextEl.setAttribute('name','bio')
    bioTextEl.setAttribute('class','textarea-bio')
    let bioButton = document.createElement('button')
    bioButton.setAttribute('type','submit')
    bioButton.setAttribute('class','bio-button')
    bioButton.textContent = 'Update'
    bioForm.appendChild(bioTextEl)
    bioForm.appendChild(bioButton)
    profileContainer.appendChild(bioForm)
}
function handleProfileUpdate(evt){
    let profileContainer = document.querySelector('#user-profile-container')
    let bioForm = document.createElement('form')
    bioForm.setAttribute('method','POST')
    bioForm.setAttribute('class','bio-form')
    bioForm.setAttribute('action',`/user?_method=PUT`)
    let bioTextEl = document.createElement('textarea')
    bioTextEl.setAttribute('name','bio')
    bioTextEl.setAttribute('class','textarea-bio')
    let bioButton = document.createElement('button')
    bioButton.setAttribute('type','submit')
    bioButton.setAttribute('class','bio-button')
    bioButton.textContent = 'Update'
    bioForm.appendChild(bioTextEl)
    bioForm.appendChild(bioButton)
    profileContainer.appendChild(bioForm)
}
