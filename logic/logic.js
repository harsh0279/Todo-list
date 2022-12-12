const Todo = require('../models/todo');

const createTask = async (req,res) => {
    
    const {title,description,isCompleted} = req.body;

    const newTask = await Todo.create({title,description,isCompleted});
    res.status(201).send(newTask);
}

const readTasks = async (req,res) => {
    
    try {
        const allTasks = await Todo.find({});
    
        if (allTasks == null){
            return res.status(404).json({msg : "No data found"});
        }
        res.status(200).json(allTasks);

    } catch (err){
        res.status(501).json({msg : err});
    }
}

const readSingleTask = async (req,res) => {
    try {
        const taskId = req.params.id;

        const task = await Todo.findOne({_id : taskId});

        if (!task){
            return res.status(404).json({msg : 'No data found'});
        }
        res.status(200).json(task);
        
    } catch (err) {
        res.status(501).json({msg : err});
    }
}

const updateIsCompleted = async (req,res) => {

    try {

        const taskId = req.params.id;
        
        const task = await Todo.findOneAndUpdate({_id : taskId},req.body);

        if (!task){
            return res.status(400).json({msg : 'No data found'});
        }
        res.status(200).json({msg : 'isCompleted updated successfully!'});
        
    } catch (err){
        res.status(501).json({msg : err});
    }

}

const updateTask = async (req,res) => {
    try {

        const taskId = req.params.id;

        const task = await Todo.findOneAndUpdate({_id : taskId},req.body);

        if (!task){
            return res.status(404).json({msg : 'No data found'});
        }
        res.status(200).json({msg : 'Task updated successfully!'});

    } catch (err){
        res.status(501).json({msg : err});
    }
}

const deleteTask = async (req,res) => {
    try {
        const taskId = req.params.id;

        const task = await Todo.findOneAndDelete({_id : taskId});

        if (!task){
            return res.status(404).json({msg : 'No Data not found'});
        }
        res.status(200).json({msg : 'Task deleted'});

    } catch (err){
        res.status(501).json({msg : err});
    }
}

module.exports = {
    createTask,
    readSingleTask,
    readTasks,
    updateIsCompleted,
    updateTask,
    deleteTask
}
