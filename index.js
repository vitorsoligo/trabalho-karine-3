const express = require('express')
const app = express()
const port = 5000

const path = require("path")
const home = require('./home')
const home2 = require('./home2')

const basepath = path.join(__dirname)

app.use('/home', home)
app.use('/home2', home2)


app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  