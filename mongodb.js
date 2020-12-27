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

    // db.collection('users')
    //   .deleteMany({ age: 28 })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((err) => console.log(err));
    db.collection('tasks')
      .deleteOne({ description: 'Complete Node.js lesson 73' })
      .then((result) => {
        console.log(result.deletedCount);
      })
      .catch((err) => console.log(err));
  }
);
