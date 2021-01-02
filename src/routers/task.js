const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/tasks', auth, async (req, res) => {
  try {
    // This code also works as an alternative:
    // await req.user.populate('tasks').execPopulate();
    // res.send(req.user.tasks);
    // In this case, I'll go with the shorter code
    const tasks = await Task.find({ owner: req.user._id });
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowed = ['description', 'completed'];
  const isValidOperation = updates.every((update) => allowed.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid update' });
  }

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
