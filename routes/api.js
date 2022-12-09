const express = require('express')
const router = express.Router()
const bp = require('body-parser')
const posts = require('../model/posts')
const cors = require('cors')

const options = 
{
    origin: "http://localhost:3000"
}

router.use(cors(options)) //Se não colocar o parâmetro de options, habilita para que qualquer domínio possa fazer um fetch da minha API, com o parâmetro, apenas os domínios dentro da white list (options) podem fazer o fetch

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})
router.post('/new', bp.json(), (req, res) => {
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Post added")
})

module.exports = router