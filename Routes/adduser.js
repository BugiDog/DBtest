const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BugiDog:Bugilan080919@cluster0-sfqfz.mongodb.net/test?retryWrites=true&w=majority";
const express = require('express');

const api = express.Router();

api.get('/adduser', (req, res) => {
    console.log(req.query)  
    const name=req.query.name   
    const surName=req.query.surname
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
        const collection = client.db("Test").collection("Pazient");  
        const myobj = { name: name, surname : surName };
          collection.insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
          }); 
        });
      
        res.send({
            status: 'success', 
            name: name,
            surName: surName
        })
})
api.get('/addpsih', (req, res) => {
    console.log(req.query)  
    const name=req.query.name   
    const surName=req.query.surname
    const pass = req.query.password
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
        const collection = client.db("Test").collection("Psih");  
        const myobj = { name: name, surname : surName ,password:pass };
          collection.insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
          }); 
        });
      
        res.send({
            status: 'success хуй', 
            name: name,
            surName: surName,
            password: pass
        })
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
