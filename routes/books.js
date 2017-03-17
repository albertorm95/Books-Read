const express = require('express');
const router = express.Router();
const config = require('../config/database')

//Model Requiered
const Book = require('../models/book');

// GET Books (/books)
router.get('/', function(req, res, next) {
    Book.getBooks({}, function(err, books) {
        if(err){
            res.json({success: false, msg:'Failed! Book no updated.'});
        }
        if (books.length) {
            let bookMap = [];
            let i = 0;
            books.forEach(function(book) {
                bookMap[i] = book;
                i++;
            });
            res.send(bookMap);
        }
        else res.json({success: true, msg:'Success! Books retrieved.'});
    });
});

module.exports = router;