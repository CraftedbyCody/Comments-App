const express = require('express') 
const router = express.Router() 
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos) // when on the todos page, make sure theyre logged in, then send todos data from controller

router.post('/createTodo', todosController.createTodo) // when user submits todo item it routes to create todo controller.

router.put('/markComplete', todosController.markComplete) // when user marks todo item as complete it routes request to controller.

router.put('/markIncomplete', todosController.markIncomplete) //when user marks todo item as incomplete it routes request to controller.

router.delete('/deleteTodo', todosController.deleteTodo) //

module.exports = router