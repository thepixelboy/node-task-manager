const mongoose = require('mongoose');

const mongoDBUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
