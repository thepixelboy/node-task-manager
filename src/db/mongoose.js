const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://pop-os.local:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
});

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const me = new User({ name: 'Jane Doe', email: 'jane.doed@fbi.GOV   ' });

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

// const task = new Task({
//   description: 'Create a new instance of the model',
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((err) => {
//     console.log('Error: ', err);
//   });
