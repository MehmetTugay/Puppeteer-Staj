const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

//get request---------------------------------------

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

const whitelist = ['http://localhost:3001']

app.get('/testtable1', db.getUsers)
app.get('/testtable1/:id', db.getUserById)
app.post('/testtable1', db.createUser)
app.put('/testtable1/:id', db.updateUser)
app.delete('/testtable1/:id', db.deleteUser)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})