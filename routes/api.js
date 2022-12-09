const express = require('express')
const router = express.Router()
const bp = require('body-parser')
const posts = require('../model/posts')


router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll))
})
router.post('/new', bp.json(), (req, res) => {
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Post added")
})

module.exports(router)