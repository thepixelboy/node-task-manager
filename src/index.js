const express = require('express');
const dotenv = require('dotenv');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET_KEY;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send({
//     message: 'Maintenance mode. Please return back in a few minutes. Thanks',
//   });
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const Task = require('./models/task');
const User = require('./models/user');
const main = async () => {
  // const task = await Task.findById('5ff0b7b74f46592c4d0b68bf');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);
  const user = await User.findById('5ff0b67229461a2bb874e7b8');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
