const express = require('express');
const dotenv = require('dotenv');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // cb(new Error('File must be a PDF'));
    // cb(undefined, true);
    // cb(undefined, false);
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Only Word files (DOC, DOCX) are allowed'));
    }
    cb(undefined, true);
  },
});
app.post(
  '/upload',
  upload.single('upload'),
  (req, res) => {
    res.send();
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
