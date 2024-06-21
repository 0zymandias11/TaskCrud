const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be empty or blank']
    },
    completed: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Task', TaskSchema);