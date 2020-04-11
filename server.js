const adduser = require('./Routes/adduser')
const getuser = require('./Routes/getuser')
const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000


const app = express() 

app.use(bodyParser.json());

app.use('/add', adduser)
app.use('/get', getuser)
 
app.listen(port)

//фхдаывьплтывзпьывтпщлыв
