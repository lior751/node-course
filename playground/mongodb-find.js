//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/test', (err,client) => {

if(err) {return console.log('Unable to connect to MongoDB server');}

console.log("Connected to MongoDB !");

const db = client.db('test');

/*db.collection('Todos').find({
_id: new ObjectID('5c0e4d434e4dfbafca1f361c')
}).toArray().
then((docs) => {

console.log('Todos');
console.log(JSON.stringify(docs, undefined, 2));

}, (error) => {console.log('Unable to fetch Todos', error);}
);

*/


/*db.collection('Todos').find().count().
then((count) => {

console.log(`Todos count:  ${count}`);
}, (error) => {console.log('Unable to fetch Todos', error);}
);*/


db.collection('Users').find({name: 'Andrew'}).toArray().
then((docs) => {

console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {console.log('Unable to fetch Todos', error);}
);




//client.close();

});

