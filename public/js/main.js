const deleteBtn = document.querySelectorAll('.del')
const commentsItem = document.querySelectorAll('span.not')
const commentsComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteComments)
})

Array.from(commentsItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(commentsComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

//create two arrays: one for all comments, one for shown comments ?
//shift() from all comments, push() to shown comments

async function deleteComments(){
    const commentsId = this.parentNode.dataset.id
    try{
        const response = await fetch('comments/deleteComments', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'commentsIdFromJSFile': commentsId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const commentsId = this.parentNode.dataset.id
    try{
        const response = await fetch('comments/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'commentsIdFromJSFile': commentsId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const commentsId = this.parentNode.dataset.id
    try{
        const response = await fetch('comments/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'commentsIdFromJSFile': commentsId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}