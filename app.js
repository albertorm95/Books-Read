const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function(){
	console.log('Connected to database '+config.database);
});

mongoose.connection.on('error', function(err){
	console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');
const books = require('./routes/books');
const book = require('./routes/book');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/books', books);
app.use('/book', book);

// Index Route
app.get('/', function(req, res){
	res.send("Invalid Endpoint");
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, function(){
	console.log('Server started on port ' + port)
});