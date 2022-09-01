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
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Comments', CommentSchema)
