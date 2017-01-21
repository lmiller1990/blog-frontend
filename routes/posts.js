const express = require('express')
const models = require('../models')
const router = express.Router()

router.get('/', (req, res) => {
  models.Post.findAll().then(function(allPosts) {
    res.json(allPosts)
  })
})

router.get('/:id', (req, res) => {
  models.Post.findAll({
    where: {
      id: parseInt(req.params.id)
    }
  }).then(function(post) {
    res.json(post)
  })
})

router.get('/content/:id', (req, res) => {
  models.Post.findAll({
    attributes: ['content'],
    where: {
      id: parseInt(req.params.id)
    } 
  }).then(function (content) {
    res.json(content)
  })
})

router.post('/create', (req, res) => {
	console.log(req.body)
  models.Post.create({
    title: req.body.title,
    content: req.body.content
  }).then(function() {
    // res.redirect('/')
    res.status(201).json()
  })
})


router.delete('/:id', (req, res) => {
  models.Post.destroy({
    where: {
      id: parseInt(req.params.id)
    }
  }).then(function() {
    res.redirect('/')
  })
})

router.get('/edit/:id', (req, res) => {
  models.Post.findAll({
    where: {
      id: parseInt(req.params.id)
    }
  }).then(function(post) {
    res.json({
      post
    })
  })
})

router.post('/update/:id', (req, res) => {
  models.Post.update({
      title: req.body.title,
      content: req.body.content
    }, {
      where: {
        id: parseInt(req.params.id)
      }
    })
    .then(function() {
      res.status(201).json()
    })
})

module.exports = router
