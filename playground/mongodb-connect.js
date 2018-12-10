//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'Lior', age: 43};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/test', (err,client) => {

if(err) {return console.log('Unable to connect to MongoDB server');}

console.log("Connected to MongoDB !");

const db = client.db('test');

/*db.collection('Users').insertOne({name:'Lior', age: 43, location: 'Nesher'}, (err,results) =>  {
if(err){
    return console.log('Unable to add this document to the collection!');
  }
  
  console.log(JSON.stringify(results.ops[0]._id.getTimestamp()));

});*/




client.close();

});

