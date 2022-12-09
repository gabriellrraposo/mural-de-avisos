//Importando módulos
const express = require('express')
const bp = require('body-parser')

const app = express()

let posts = [
    {
        id: 0,
        title: "teste",
        description: "descrição teste"
    }
    
]

app.get('/all', (req, res) => {
    res.json(JSON.stringify(posts))
})
app.post('/new', bp.json(), (req, res) => {
    let id = generateId()
    let title = req.body.title
    let description = req.body.description

    posts.push({id, title, description})

    res.send("Post added")
})

//Escutando a porta 3000 para iniciar o servidor
const PORT = 3000
app.listen(PORT, err => {
    if (err) throw err

    console.log(`Server is running on Port:${PORT}!`)
})

let generateId = () => {
    return Math.random().toString(36).substring(2,)
}