const express = require('express') 
const router = express.Router() 
const commentsController = require('../controllers/comments') 
const { ensureAuth } = require('../middleware/auth')
const sendMain = require('../middleware/sendMain')

router.get('/', ensureAuth, commentsController.getComments) // when on the comments page, make sure theyre logged in, then send comments data from controller

router.post('/createComments', commentsController.createComments) // when user submits comments item it routes to create comments controller.

//router.put('/markComplete', commentsController.markComplete) // when user marks comments item as complete it routes request to controller.

//router.put('/markIncomplete', commentsController.markIncomplete) //when user marks comments item as incomplete it routes request to controller.

router.delete('/deleteComments', commentsController.deleteComments) //

module.exports = router