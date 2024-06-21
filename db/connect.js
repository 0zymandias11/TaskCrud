const mongoose = require('mongoose');

// const connectionString = ur

const connectDB = (url)=>{mongoose.connect(url).then(()=>{
    console.log("connected to the DB")}).catch((err)=>{
    console.log(err);
});
}


module.exports = connectDB;

/*
const mongoose = require('mongoose');

const username = encodeURIComponent('spardadantev1');
const password = encodeURIComponent('welcome12jk');
const cluster = 'nodeexpressprojects.2ctdgiy.mongodb.net';
const dbName = 'task_manager';

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&appName=NodeExpressProjects`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas', error);
});

*/