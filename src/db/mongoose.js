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
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error(`You can't use the word 'password' as a password.`);
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
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// const me = new User({
//   name: 'Han Solo',
//   email: 'solo.han@milleniumfalcom.com',
//   password: 'loremIpsum  ',
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log('Error: ', err);
//   });

const task = new Task({
  description: 'Test your work with and without errors',
  completed: true,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });
