const adduser = require('./Routes/adduser')
const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000


const app = express() 

app.use(bodyParser.json());

app.use('/', adduser)
 
app.listen(port)
