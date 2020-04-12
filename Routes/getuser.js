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
            collection.findOne({ login: login }, function (err, results) {
                console.log(results)
                //console.log(results.surname + "  " + results.name + "  " + results._id);
                if (results === null) {
                    res.send("ok")
                } else { res.send("nope") }
                client.close();
            })
        } else {
            collection.find().toArray(function (err, results) {
                console.log(results);

                client.close();
            });
        };
        res.setHeader('Access-Control-Allow-Origin', '*');
    })

})
api.get('/login', (req, res) => {
    const login = req.query.login
    const pass = req.query.password
    console.log(login + '   ' + pass)

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("Test").collection("users");
        if (login !== '') {
            collection.findOne({ login: login }, function (err, results) {
                console.log(results)
                //console.log(results.surname + "  " + results.name + "  " + results._id);
                if (results === null) {
                    res.send("nope")
                } else {
                    if (results.password === pass) {
                        res.send("ok")
                        console.log(results)
                    } else {
                        res.send("passErr")
                    }
                }
                client.close();
            })
        } else {
            collection.find().toArray(function (err, results) {
                console.log(results);

                client.close();
            });
        };
        res.setHeader('Access-Control-Allow-Origin', '*');
    })
})

api.get('/account', (req, res) => {
    const login = req.query.login

    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("Test").collection("users");
        collection.findOne({ login: login }, function (err, results) {
            console.log(results)
            //console.log(results.surname + "  " + results.name + "  " + results._id);
            res.send(results)
            client.close();
        })

        res.setHeader('Access-Control-Allow-Origin', '*');
    })
})





module.exports = api;