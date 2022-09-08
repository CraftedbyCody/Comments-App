# Introduction

Welcome to "The Conversation", get the latest gossip and talk with others by becoming a part of "The Conversation" today!

"The Conversation" is our MVP for a commenting/discussion app that can be used standalone or integrated into another app or project. 

It uses MVC architecture, allowing users to 
- sign-up for an account, 
- log in, 
- see all previous comments from all users, 
- leave their own comment, 
- like/thumbs-up comments, 
- and delete their own comments. 

---

# Objectives

"The Conversation" is a beginner level app created to understand how MVC concept and logins are added. 

---

# Who is this for? 

It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Screenshots

<img src="https://i.imgur.com/2ejbU2v.jpeg" width=400 />
<img src="https://i.imgur.com/vYkiS2y.jpeg" width=400 />
<img src="https://i.imgur.com/QdzNSnh.jpeg" width=400 />
<img src="https://i.imgur.com/lnrBgf0.jpeg" width=400 />

---

# Optimizations 

As an MVP, the bare minimum functions of the app are working. However, if we had had more time, there are several things we would have liked to have done, including: 
- Clean up file and code structure, improve CSS styling: styling was one of the last things we did, and in hindsight, we would have been better off tackling that earlier, so that the app would look nicer, have more animations, be fully responsive, etc. This was our biggest weak point at time of MVP release. 
- Include API to generate random topics: we had the idea to give the comments page a randomly generated topic each day, using an API we found. However, we ran out of time to include it for MVP release. We were very excited about this feature, however, so we will likely implement it post-release. 
- Make favorites/likes show increments when you press the button: we were able to get the favorites functioning, but we ran out of time to set it up so that the page would reload and show you that your like was added. 
- Show a limited number of comments at initial load, with button to load more comments: we had originally included a function that would load only five comments at initial page load, to keep the page from growing too large to read easily. This function worked, however, our attempts to link it to a button to be used to load another five comments on each press proved to be much more of a challenge than we anticipated, and we ultimately abandoned the feature. With better understanding of MVC and Express, we would love to add this feature at a later date. 

---

# Install all the dependencies or node packages used for development via Terminal

Use the command `npm install` 

---

# To start your server

Use the command `npm start`  

# Things to add

- The project has an .env file with a test database attached, however, if you wish to make your own version:
  - Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` (from MongoDB) 

 # Contributors

 Cody Patrick Franklin - [Github: @CraftedbyCody](https://github.com/CraftedbyCody/) - [Twitter: @CraftedbyCody](https://twitter.com/CraftedbyCody)
 
 Roshanell Francisco - [Github: @Roshanell](https://github.com/Roshanell) - [Twitter: @roshanell](https://twitter.com/roshanell)
  
 James Kim - [Github: @soursprite](https://github.com/soursprite) - [Twitter: @soursprite](https://twitter.com/soursprite)
 
 Kingsley Ogbonna - [Github: @KingsOG] (https://github.com/KingsOG) [Twitter: @KingsleyOG7] (https://twitter.com/KingsleyOG7)
