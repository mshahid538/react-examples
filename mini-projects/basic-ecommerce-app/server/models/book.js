const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    isbn: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Book', bookSchema);