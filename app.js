const connectDB = require('./db/connect');

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not_found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, ()=>{
            console.log("listening at port 3000");
        });
    }catch(err){
        console.log(`couldn't connect to DB ${err}`);
    }
}

app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.get('/',(req, res)=>{
    res.status(201).send("hello there");
});

start();


