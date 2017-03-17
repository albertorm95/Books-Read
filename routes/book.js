const express = require('express');
const router = express.Router();
const config = require('../config/database')

//Model Requiered
const Book = require('../models/book');

// POST Book (/create)
router.post('/create', function(req, res, next) {
	console.log("Method received: " + req.method + req.url);
	let newBook = new Book({
		name: req.body.name,
		genre: req.body.genre,
		author: req.body.author,
		publishdate: req.body.publishdate,
		isbn: req.body.isbn,
		cover: req.body.cover
	});

	Book.createBook(newBook, function(err, book) {
		if(err) res.json({success: false, msg:'Failed! Book no created.'});
		else res.json({success: true, msg:'Success! Book created'});
	});
});

// PUT Book (/update/:id)
router.put('/update/:id', function(req, res, next) {
	console.log("Method received: " + req.method + req.url);
	let id = req.params.id;
	let book = req.body;
	book.name = req.body.name || book.name;
	book.genre = req.body.genre || book.genre;
	book.author = req.body.author || book.author;
	book.publishdate = req.body.publishdate || book.publishdate;
	book.isbn = req.body.isbn || book.isbn;
	book.cover = req.body.cover || book.cover;

	Book.updateBook(id, book, function(err){
		if(err) res.json({success: false, msg:'Failed! Book no updated.'});
		else res.json({success: true, msg:'Success! Book updated.'});
	});
});

// GET Book (/book/:id)
router.get('/:id', function(req, res, next) {
	console.log("Method received: " + req.method + req.url);
	let id = req.params.id;
	Book.getBook(id, function(err, book) {
		if(err) res.send(err);
		else res.send(book);
	});
});

// DELETE Book (/delete/:id)
router.delete('/delete/:id', function(req, res, next) {
	console.log("Method received: " + req.method + req.url);
	let id = req.params.id;
	Book.deleteBook(id, function(err) {
		if(err) res.json({success: false, msg:'Failed! Book no deleted.'});
		else res.json({success: true, msg:'Success! Book deleted.'});
	});
});

module.exports = router;