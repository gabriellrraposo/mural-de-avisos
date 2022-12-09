//Importando módulos
const express = require('express')
const bp = require('body-parser')
const posts = require('./model/posts')

const app = express()

app.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll))
})
app.post('/new', bp.json(), (req, res) => {
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("Post added")
})

//Escutando a porta 3000 para iniciar o servidor
const PORT = 3000
app.listen(PORT, err => {
    if (err) throw err

    console.log(`Server is running on Port:${PORT}!`)
})