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
      
        res.send('Hello Worldqwqfwfqfqwfqwfwq')   
})
api.get('/addpsih', (req, res) => {
    console.log(req.query)  
    const name=req.query.name   
    const surName=req.query.surname
  
    const client = new MongoClient(uri, { useNewUrlParser: true });
  
    client.connect(err => {
        const collection = client.db("Test").collection("Psih");  
        const myobj = { name: name, surname : surName };
          collection.insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
          }); 
        });
      
        res.send('Hello Worldqwqfwfqfqwfqwfwq')   
})
module.exports = api;
