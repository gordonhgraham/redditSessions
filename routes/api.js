const express = require('express')
const router = express.Router()
const knex = require(`../db/knex.js`)

/* GET home page. */
router.get('/posts', function(req, res, next) {
  knex(`posts`).then(results => {
    return results
  })
})

router.post('/newpost', function(req, res, next) {
  console.log(`here is the object from your http.post`, req.body);
  })

module.exports = router
