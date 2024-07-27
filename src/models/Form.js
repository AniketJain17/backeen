const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formName: {
        type: String,
        required: true,
    },
    formSequence: {
        type: Array
    },
    formTheme: {
        type: String,
        required: true,
    },
    folderId: {
        type: mongoose.ObjectId,
    },
    userId: {
        type: mongoose.ObjectId,
    }
});

module.exports = mongoose.model('Form', formSchema);