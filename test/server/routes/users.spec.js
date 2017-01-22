const request  = require('supertest')
const Bluebird = require('bluebird')
const app      = require('../../../app')
const expect   = require('chai').expect
const models   = require('../../../models')

describe('/users', function() {
  before(function() {
    return require('../../../models').sequelize.sync()
  })

  beforeEach(function() {
    this.models = models

    return Bluebird.all([
      this.models.User.destroy({
        truncate: true
      })
    ])
  })

  it('/create persists a new user', function(done) {
    const self = this
    request(app)
      .post('/users/create')
      .type('form')
      .set('Accept', /application\/json/)
      .send({
        username: 'New user',
        password: 'Password',
      })
      .end(function(err, res) {
        self.models.User.findAll({
          where: {
            id: 1
          }
        }).then(function(users) {
          expect(users.length).to.equal(1)
          expect(users[0].username).to.equal('New user')
          done()
        })
      })
  })
})
