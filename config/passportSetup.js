const passport = require('passport')
const User     = require('../models').User
const models   = require('../models')
const LocalStrategy = require('passport-local').Strategy

module.exports = function() {
  passport.serializeUser(function (user, done) {
    console.log('Serializing User')
    console.log(user.id)
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) { 
    console.log('Deserializing User')
    User.findAll({
      where: {
        id: id
      }
    }).then((user) => { done(null, user) })
  })

  passport.use('login', new LocalStrategy(function(username, password, done) {
    console.log('Using login strategy')
    this.models = models
    this.models.User.findOne({
      where: {
        username: username
      }
    }).then(function(user) {
      if (!user) {
        return done(null, false, 'User does not exist.')
      }
      user.verifyPassword(password)
        .then((res) => {
          if (res) { 
            return done(null, user) 
          } else {
            return done(null, false, 'Invalid password.')
          }
        })
        .catch((err) => { console.log('Error validating:', err) 
          return done(null, false) })
    })
  }))
}
