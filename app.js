const express = require('express');
const app = express()
const connectToDB = require('./db/connection');

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectToDB('mongodb://127.0.0.1:27017/todo-list');
        app.listen(port,() => console.log(`server is running at port ${port}`));
    } catch (err) {
        console.log(err);
    }
}

start();