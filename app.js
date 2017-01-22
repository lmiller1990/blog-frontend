const models    = require('./models')
const Sequelize = require('sequelize')
const path      = require('path')
const bodyParser= require('body-parser')
const cookieParser = require('cookie-parser')
const session   = require('express-session')
const env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/config/config.json')[env]
const passport  = require('passport')
const utils     = require(__dirname + '/utils/databaseUtils.js')
const index     = require(__dirname + '/routes/index.js')
const posts     = require(__dirname + '/routes/posts.js')
const users     = require(__dirname + '/routes/users.js')
const express   = require('express')
const setupPassport = require('./config/passportSetup')

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//models.sequelize.sync()

//utils.authenticate(sequelize)

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(session({
  secret: 'TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX',
  resave: true,
  saveUninitialize: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', index)
app.use('/posts', posts)
app.use('/users', users)

setupPassport()

app.use((req, res) => {
  res.status(404).send('404 error. Page not found')
})

app.listen(3000, () => {
  console.log('App started on port 3000.')
})

module.exports = app
