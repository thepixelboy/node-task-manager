const mongoose = require('mongoose');

mongoose.connect('mongodb://pop-os.local:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
