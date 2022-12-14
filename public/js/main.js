const deleteBtn = document.querySelectorAll('.del')
const showMoreBtn = document.querySelectorAll('.showMore')
const commentsItem = document.querySelectorAll('span.not')
const commentsComplete = document.querySelectorAll('span.completed')
const likeBtn = document.querySelectorAll('.like')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteComments)
})

Array.from(likeBtn).forEach((el)=>{
    el.addEventListener('click', addLike)
})

/*Array.from(showMoreBtn).forEach((el)=>{
    el.addEventListener('click', showMore)
})*/

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


async function addLike(){
    const commentsId = this.parentNode.dataset.id
    // const likes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('comments/addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
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

//ADD ARRAY: each comment will have a like
//async function addLike(){
//    const commentsId = this.parentNode.dataset.id
//    const tLikes = Number(this.parentNode.dataset[5].innerText)
//    try{
//        const response = await fetch('comments/addOneLike', {
//            method: 'put',
//           headers: {'Content-Type': 'application/json'},
//            body: JSON.stringify({
//              'commentsIdFromJSFile': commentsId,
//              'likesS': tLikes
//            })
//          })
//        const data = await response.json()
//        console.log(data)
//        location.reload()
//
//    }catch(err){
//        console.log(err)
//    }
//}



/*let comments = document.querySelectorAll(".commentItem")
comments.forEach( x => x.classList.toggle("hidden"))*/

/*function test() {
    document.querySelector("#test").innerText+=comments
}*/

/*
let displaySet = 5
let currentItems = 0

const displayComments = function(x) { x.forEach ( el => {
    document.querySelector("#comments").innerHTML("<li class='commentItem' data-id='<%=el._id%>'>"+el.comments+el.timeStamp+el.userName+"</li>")

    //if (currentUserId == el.userId) { %> <span class='del'> Delete </span> <% }


})}

const displayNext = () => {
    displayComments(comments.slice(currentItems, currentItems + displaySet));

    if (!(currentItems + displaySet > comments.length)) {
        currentItems += displaySet;
    } else {
        currentItems += (comments.length - currentItems)
    }
}
*/
/*

let comments = document.querySelectorAll(".commentItem")
console.log(comments[2])
console.log("This is working")
for(let i = 5; i<13; i++) {

    comments[i].classList.toggle("hidden")
}
*/