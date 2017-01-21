'use strict';
const bcrypt = require('bcrypt-nodejs')
const SALT_FACTOR = 10

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user, options, done) {
        var noop = function() {  }
        console.log('We should hash password here')
        bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
          if (err) { return done(err) }
          bcrypt.hash(user.password, salt, noop, function(err, hashpw) {
            if (err) { return done(err) }
            user.password = hashpw
            done()
          })
        })
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
    instanceMethods: {
      verifyPassword: function(guess) {
        return new Promise((resolve, reject) => { 
          bcrypt.compare(guess, this.password, function(err, res) {
            if (err) { reject(res) }
            resolve(res)
          })
        })
      },
      sayHi: function() {
        console.log('Hi, my name is', this.username)
        return this.username
      }
    }
  });
  return User;
};

