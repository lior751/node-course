//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/test', (err,client) => {
if(err) {return console.log('Unable to connect to MongoDB server');}
console.log("Connected to MongoDB !");
const db = client.db('test');
db.collection('Users').deleteMany({name: 'Andrew'}).then
((result)=>{console.log(result);});  //look at 'result' filed of 'result'
//client.close();
});

