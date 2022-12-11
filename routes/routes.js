const express = require('express');
const router = express.Router();

const {
    createTask,
    readSingleTask,
    readTasks,
    updateTask,
    deleteTask
} = require('../logic/logic');

router.route('/createtask').post(createTask);
router.route('/readtask:/id').get(readSingleTask);
router.route('/readtasks').get(readTasks);
router.route('/updatetask/:id').put(updateTask);
router.route('/deletetask:/id').delete(deleteTask);


module.exports = router;