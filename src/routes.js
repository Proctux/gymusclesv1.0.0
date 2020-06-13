const express = require('express')
const routes = express.Router()

const instructors = require('../src/app/controllers/instructors')
const members = require('../src/app/controllers/members')

routes.get("/", function(req, res) {
  return res.redirect("/home")
})

routes.get('/home', function(req, res) {
  return res.render('home/index')
})

routes.get('/instructors', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id/edit', instructors.edit)
routes.get('/instructors/:id', instructors.show)

routes.post('/instructors', instructors.post)
routes.put('/instructors', instructors.update)
routes.delete('/instructors', instructors.delete)

/* =========== Members =========== */

routes.get('/members', members.index)
routes.get('/members/create', members.create)
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit)

routes.post('/members', members.post)
routes.put('/members', members.update)
routes.delete('/members', members.delete)

module.exports = routes