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
