const { Schema, model } = require('mongoose')
const { Exercise } = require('.')

cons Workout = new Schema({
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
      weight: {
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

module.exports = model('Workout', Workout) 