const express = require('express');
const router = express.Router();

const {
    createTask,
    readSingleTask,
    readTasks,
    updateIsCompleted,
    updateTask,
    deleteTask
} = require('../logic/logic');

router.route('/createtask').post(createTask);
router.route('/gettask/:id').get(readSingleTask);
router.route('/gettasks').get(readTasks);
router.route('/updateiscompleted/:id').patch(updateIsCompleted);
router.route('/updatetask/:id').put(updateTask);
router.route('/deletetask/:id').delete(deleteTask);


module.exports = router;