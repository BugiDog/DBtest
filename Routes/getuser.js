const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BugiDog:Bugilan080919@cluster0-sfqfz.mongodb.net/test?retryWrites=true&w=majority";
const express = require('express');

const api = express.Router(); let user

api.get('/user', (req, res) => {
    const name = req.query.name
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("Test").collection("Pazient");
        if (name != '') {
           collection.findOne({ name: name } ,function (err, results) {
                console.log(results.surname+"  "+results.name+"  "+results._id );
                client.close();
            });
        } else {
             collection.find().toArray( function (err, results) {
                console.log(results);
                client.close();
            });
        };
        //res.setHeader('Access-Control-Allow-Origin', '*');
        res.send({
            status: 'success',
            name: 'user'

        })
    })

})





module.exports = api;