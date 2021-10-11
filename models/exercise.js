const { Schema, model } = require('mongoose')
const { Exercise } = require('.')

cons Exercise = new Schema({
  day: {
  type: Date,
  default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String,
        required: true
      },
      duration: {
        type: Number 
      },
      reps: {
        type: Number 
      },
      distance: {
        type: Number 
      }
    }
  ]
})

module.exports = model('Exercise', Exercise) 