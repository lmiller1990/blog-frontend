const Bluebird = require('bluebird')
const expect   = require('chai').expect
const models   = require('../../../models')

describe('User', function() {
  before(function() {
    return require('../../../models').sequelize.sync()
  })

  beforeEach(function() {
    this.models = models
    return  Bluebird.all([
      this.models.User.destroy({
        truncate: true
      })
    ])
  })

  it('prints the username', function(done) {
    this.models.User.create({
      username: 'Test User'
    }).then(function(user) {
      let name = user.sayHi()
      expect(name).to.equal(user.username)
      done()
    })
  })

  it('hashes the password before creating the user', function(done) {
    this.models.User.create({
      username: 'Tester',
      password: 'non_hashed_password'
    }).then(function(user) {
      expect(user.password).to.not.equal('non_hashed_password')
      done()
    })
  })

  it('throw an error for an incorrect password guess', function(done) {
    let password = 'the_password'
    let incorrectGuess = 'wrong_password'

    this.models.User.create({
      username: 'Test User',
      password: password
    }).then(function(user) {
      user.verifyPassword(incorrectGuess).then((result) => {
        expect(result).to.equal(false)
        done()
      })
    })
  })

  it('authenticates a correct password guess', function(done) { 
    let password = 'the_password'
    let correctGuess = 'the_password'

    this.models.User.create({
      username: 'Test User',
      password: password
    }).then(function(user) {
      user.verifyPassword(correctGuess).then((result) => {
        expect(result).to.equal(true)
        done()
      })
    })
 })
})
