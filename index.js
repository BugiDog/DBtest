const adduser = require('./Routes/adduser')
const express = require('express')
const app = express()
 

app.use('/', adduser)
 
app.listen(3000)