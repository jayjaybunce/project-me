

let commentButtonEls = document.querySelectorAll('.comment-button')



commentButtonEls.forEach(el=>{
    el.addEventListener('click',handleClick)
})


function handleClick(evt){
    let postId = evt.target.parentElement.parentElement.parentElement.getAttribute('data-id')
    let commentEl = document.querySelectorAll(`[data-id="${postId}"]`)[2]
    if(getComputedStyle(commentEl).display==='none'){
        commentEl.style.display ='block'

    }else{
        commentEl.style.display ='none'
    }
    // if(getComputedStyle(commentEl).position === 'absolute'){
    //     commentEl.style.position = 'relative'
    //     commentEl.style.marginTop = '0'
    //     commentEl.style.visibility = 'visible'
    //     setTimeout(function(){
    //         commentEl.style.opacity = '1.0'
    //     },200)
    // }else{
    //     commentEl.style.opacity = '0'
    //     commentEl.style.visibility = 'hidden'
    //     setTimeout(function(){
    //         commentEl.style.marginTop = '-1000px'
            
    //     },200)
    //     setTimeout(function(){
    //         commentEl.style.position = 'absolute'
    //     },200)

    // }
  

}