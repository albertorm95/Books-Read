const mongoose = require('mongoose');
const config = require('../config/database');

// Book Schema
const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    author: {
        type: String
    },
    publishdate: {
        type: Date
    },
    isbn: {
        type: String
    },
    cover: {
    	type: String
    }
});

// Declaring and exporting Schema
const Book = module.exports = mongoose.model('Book', BookSchema);

// Schema functions (CRUD)
// POST .save
module.exports.createBook = function(newBook, callback) {
    newBook.save(callback);
};

// GET .findById
module.exports.getBook = function(id, callback) {
    Book.findById(id, callback);
};

// GET .find
module.exports.getBooks = function(all, callback) {
    Book.find(all, callback);
};

// PUT .findOneAndUpdate
module.exports.updateBook = function(id, updatedBook, callback) {
    Book.findOneAndUpdate(id, updatedBook, callback);
};

// DELETE .findByIdAndRemove
module.exports.deleteBook = function(id, callback) {
    Book.findByIdAndRemove(id, callback);
};