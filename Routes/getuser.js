const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BugiDog:Bugilan080919@cluster0-sfqfz.mongodb.net/test?retryWrites=true&w=majority";
const express = require('express');

const api = express.Router(); let user

api.get('/checkLogin', (req, res) => {
    const login = req.query.login
    console.log(login)
    
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("Test").collection("users");
        if (login !== '') {
            collection.findOne({ Login : login }, function (err, results) {
                console.log(results)
                //console.log(results.surname + "  " + results.name + "  " + results._id);
                if (results==null){
                res.send( "ok" )} else { res.send( "nope" )}

                client.close(); 
            })
                
            
        } else {
            collection.find().toArray(function (err, results) {
                console.log(results);

                client.close();
            });
        };
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.send({

        // })
    })

})





module.exports = api;