//Importando módulos
const express = require('express')
const path = require('path')
const apiRoute = require('./routes/api')

const app = express()

app.use("/api", apiRoute)
app.use("/", express.static(path.join(__dirname, "public")))

//Escutando a porta 3000 para iniciar o servidor
const PORT = 3000
app.listen(PORT, err => {
    if (err) throw err

    console.log(`Server is running on Port:${PORT}!`)
})