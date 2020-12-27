// CRUD (create, read, update, delete)

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://pop-os.local:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     name: 'Jane Doe',
    //     age: 28,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );
    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 28,
    //     },
    //     { name: 'Gunter', age: 27 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );
    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Complete Node.js lesson 73',
    //       completed: true,
    //     },
    //     {
    //       description: 'Complete Node.js lesson 74',
    //       completed: true,
    //     },
    //     {
    //       description: 'Complete Node.js lesson 77',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
