
const express = require('express')

const mostrarData = require('./app')

const port = 8080
const app = express()

app.get('/api', (req, res) => {

    res.end()

})

app.listen(port, (req, res) => {
    console.log(`El servidor esta corriendo en http://localhost:${port}`)
})