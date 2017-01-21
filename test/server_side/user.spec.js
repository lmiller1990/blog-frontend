const Bluebird = require('bluebird')
const expect   = require('chai').expect

describe('User', function() {
  before(function() {
    return require('../../models').sequelize.sync()
  })

  beforeEach(function() {
    this.models = require('../../models')

    return Bluebird.all([
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
})
