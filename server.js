//Anything with todo or todos tag needs to be changed to comments
const express = require('express') // framework to make it all work
const app = express()
const mongoose = require('mongoose') //mongo model thingy
const passport = require('passport') // local authentication framework (user accounts)
const session = require('express-session') //saving session data
const MongoStore = require('connect-mongo')(session) //maintains your mongo session
const flash = require('express-flash') // "Flash is an extension of connect-flash with the ability to define a flash message and render it without redirecting the request."
const logger = require('morgan') //middleware for console logging stuff
const connectDB = require('./config/database')  //mondo db connection
const mainRoutes = require('./routes/main') //router
const commentsRoutes = require('./routes/comments') //router

require('dotenv').config({path: './config/.env'}) // env file to hold our secret non-public data

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs') // how to render content, use EJS content 
app.use(express.static('public')) // use express to handle public files like html and css ?
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions (creates our mongoose session)
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware (starts up the passport log in session)
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes) //router for root path
app.use('/comments', commentsRoutes) //router for comments path
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    

