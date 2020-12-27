// CRUD (create, read, update, delete)

const { MongoClient, ObjectID } = require('mongodb');

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

    // db.collection('users').findOne(
    //   { _id: new ObjectID('5fe88b93b2306dd5f84680a1') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch document');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 30 })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log('Unable to fetch documents');
    //     }

    //     console.log(users);
    //   });

    // db.collection('users')
    //   .find({ age: 30 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log('Unable to fetch documents');
    //     }

    //     console.log(count);
    //   });

    db.collection('tasks').findOne(
      { _id: new ObjectID('5fe887785dd178d4952d2a81') },
      (error, task) => {
        if (error) {
          return console.log('Unable to fetch document');
        }

        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log('Unable to fetch documents');
        }

        console.log(tasks);
      });
  }
);
