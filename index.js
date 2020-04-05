const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://BugiDog:Bugilan080919@cluster0-sfqfz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Test");
  const myobj = { name: "Company Inc", address: "Highway 37" };
  collection.collection("Pazient").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });
});

const http = require('http');
let app = http.createServer((req, res) => {    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
});


app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');

console.log('я хуй')