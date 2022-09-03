const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') // controllers
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth') // double check that authentication occured

router.get('/', homeController.getIndex) // go to home page
router.get('/login', authController.getLogin) //Retrieves log in info
router.post('/login', authController.postLogin) // send the log in info
router.get('/logout', authController.logout) // get the lout out action, and log them out, lol
router.get('/signup', authController.getSignup)//retrieves signup info
router.post('/signup', authController.postSignup) // send new user account 

/*
app.get('/main', (req, res) => {
    res.send("test")
})
*/

module.exports = router // shorthand aka alias so we dont have to type module.exports, just type router

//initialized?