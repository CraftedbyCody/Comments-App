const mongoose = require('mongoose')

//timestamp need to choose date format to display
//userid
//username
//comment string


//bonus: number of likes

const CommentSchema = new mongoose.Schema({
  comments: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Comments', CommentSchema)
