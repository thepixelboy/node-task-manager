const mongoose = require('mongoose');

mongoose.connect('mongodb://pop-os.local:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  name: 'John Doe',
  age: 'Mike',
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });
