const adduser = require('./Routes/adduser')
const express = require('express')
const bodyParser = require('body-parser')

const app = express() 

app.use(bodyParser.json());

app.use('/', adduser)
 
app.listen(3000)