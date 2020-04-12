const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BugiDog:Bugilan080919@cluster0-sfqfz.mongodb.net/test?retryWrites=true&w=majority";
const express = require('express');

const api = express.Router();

api.get('/user', (req, res) => {
  console.log(req.query)
  const type =req.query.type
  const login=req.query.login
  const pass = req.query.password
  const name = req.query.name
  const surName = req.query.surname

  const client = new MongoClient(uri, { useNewUrlParser: true });

  client.connect(err => {
    const collection = client.db("Test").collection("users");
    const myobj = { Type:type , Login:login , Password:pass , Name: name , Surname: surName  };
    collection.insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      client.close();
    });
  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('SUCCESS')
})

// api.post('/addpsih', (req, res) => {
//     console.log(req.body)   


//     const client = new MongoClient(uri, { useNewUrlParser: true });

//     client.connect(err => {
//             const collection = client.db("Test").collection("Psih");  
//             const myobj = { name: req.body.name, surname : req.body.surname };
//             collection.insertOne(myobj, function(err, res) {
//                 if (err) throw err;
//                 console.log("1 document inserted");
//                 client.close();
//             }); 
//     });
//     res.send({
//         status: 'sucess inserted data', 
//     })
// })

module.exports = api;
