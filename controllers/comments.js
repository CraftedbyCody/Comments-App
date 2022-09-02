const Comments = require('../models/Comments')

// method to create comment stamped with user id
// delete comment that belongs to user id
// edit comment that belong to user id


module.exports = {
    getComments: async (req,res)=>{ //pulls up comments objs
        console.log(req.user)
        console.log("LOOKATME"+req.user.id)
        try{
            const commentsItems = await Comments.find() //grab all objects
            //maybe we need to cap how many results we get to a reasonable number
            //const itemsLeft = await Comments.countDocuments({userId:req.user.id,completed: false}) //we dont need this
            
            res.render('comments.ejs', {comments: commentsItems, currentUserId: req.user.id})
        }catch(err){
            console.log(err)
        }
    },

    createComments: async (req, res)=>{
        try{
            await Comments.create({comments: req.body.commentsItem, timeStamp: Date.now(), userId: req.user.id, userName: req.user.userName}) //adds obj to mongo with userid
            console.log('Comments has been added!')
            res.redirect('/comments')
        }catch(err){
            console.log(err)
        }
    },

    deleteComments: async (req, res)=>{
        console.log(req.body.commentsIdFromJSFile)
        try{
            await Comments.findOneAndDelete({_id:req.body.commentsIdFromJSFile})
            console.log('Deleted Comments')
            res.json('Deleted It')
        }catch(err){
            console.log("It screwed up here")
            console.log(err)
        }
    }
}    



    // markComplete: async (req, res)=>{
    //     try{
    //         await Comments.findOneAndUpdate({_id:req.body.commentsIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Comments.findOneAndUpdate({_id:req.body.commentsIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },

        /*
    getComments: async (req,res)=>{ //pulls up comments objs
        console.log(req.user)
        try{
            const commentsItems = await Comments.find({userId:req.user.id}) //grabs objects with matching user id
            //maybe we need to cap how many results we get to a reasonable number
            const itemsLeft = await Comments.countDocuments({userId:req.user.id,completed: false})
            res.render('comments.ejs', {comments: commentsItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    */