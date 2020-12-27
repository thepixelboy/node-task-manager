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
    //   .updateOne(
    //     {
    //       _id: new ObjectID('5fe87270b4f0ecd280a401ff'),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    db.collection('tasks')
      .updateMany({ completed: false }, { $set: { completed: true } })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
