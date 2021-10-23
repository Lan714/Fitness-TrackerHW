const router = require('express').Router()
const { response } = require('express')
const { Exercise } = require('../models')

router.get('/workouts/', async function (req, res) {
  const workouts = await Exercise.find({})
  res.json(exercises)
})

router.get('/workouts/range', async function (req, res) {
  const workouts = await Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$workouts.duration" }
      }
    }
  ])
  .sort({ _.id: -1 })
  .limit(7)
  res.json(workouts)
})

