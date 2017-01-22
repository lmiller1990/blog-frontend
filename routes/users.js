const passport = require('passport')
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

router.get('/', function(req, res) {
  console.log('Ok!')
})


router.get('/failure', function(req, res) {
  console.log('Not ok!')
})

router.post('/login', 
  passport.authenticate('login'),
  function(req, res) { 
    console.log('Logged in!!!!!!!!')
    res.status(200).json()
  }
)

module.exports = router
