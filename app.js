const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const request = require('request');

const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

const app = express();

const users = require('./routes/users');
const aspirants = require('./routes/aspirants');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Endpoints
app.use('/users', users);
app.use('/aspirants', aspirants);
app.use('/proxy', function(req, res) {
    var url = req.url.replace('/?url=', '');
    req.pipe(request(url)).pipe(res);
});

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Fetch aspirant picture from the pucblic folder
app.get('/assets/images/aspirants/:picture', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/images/aspirants/:picture'));
});

// Redirect all other invalid request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
