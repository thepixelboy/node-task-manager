// CRUD (create, read, update, delete)
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://pop-os.local:27017';
const databaseName = 'task-manager';

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
    //     name: 'John Doe',
    //     age: 30,
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
    db.collection('tasks').insertMany(
      [
        {
          description: 'Complete Node.js lesson 73',
          completed: true,
        },
        {
          description: 'Complete Node.js lesson 74',
          completed: true,
        },
        {
          description: 'Complete Node.js lesson 77',
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert documents');
        }

        console.log(result.ops);
      }
    );
  }
);
