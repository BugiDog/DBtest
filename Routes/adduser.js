const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BugiDog:Bugilan080919@cluster0-sfqfz.mongodb.net/test?retryWrites=true&w=majority";
const express = require('express');

const api = express.Router();


api.get('/user', (req, res) => {
  console.log(req.query)
  const type = req.query.type
  const login = req.query.login
  const pass = req.query.password
  const name = req.query.name
  const surName = req.query.surname

  const client = new MongoClient(uri, { useNewUrlParser: true });

  client.connect(err => {
    const collection = client.db("Test").collection("Users");
    const myobj = { type: type, login: login, password: pass, name: name, surname: surName };
    collection.insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      client.close();
    });
  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('SUCCESS')
})






api.get('/testrez', (req, res) => {
  console.log(req.query)
  const login = req.query.login
  const testName = req.query.testname
  const rezult = req.query.rezult

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("Test").collection("Users");
    let newRez = { testname: testName, responses: rezult }

    collection.update({ login: login }, { $push: { histori: newRez } })
    console.log("1 document update");

  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('SUCCESS')
});


api.get('/testupdate', (req, res) => {
  console.log(req.query)
  const testName = req.query.testname
  const newQuestion = req.query.newquestion

  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("Test").collection("Tests");

    collection.update({ testname: testName }, { $push: { questions: newQuestion } })
    console.log("1 test update");

  });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('SUCCESS')
});



// client.connect(err => {
//   const collection = client.db("Test").collection("Users");


//   collection.findOne({ login: login }, function (err, results) {
//     //console.log(results)
//     let nweRez=results.histori+{ testname: testName, responses: rezult}


//     client.close();
//   })

//   const myobj = { type: type, login: login, password: pass, name: name, surname: surName };




//   collection.insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     client.close();
//   });
// });
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.send('SUCCESS')
// })


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
