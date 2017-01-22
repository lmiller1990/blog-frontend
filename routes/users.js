const express = require('express')
const models = require('../models')
const router = express.Router()

router.post('/create', (req, res) => {
  models.User.create({
    username: req.body.username,
    password: req.body.password
  }).then(function() {
    res.status(201).json()
  })
})

module.exports = router
