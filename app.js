var cluster = require('cluster');
if (cluster.isMaster) {
    cluster.fork();

    cluster.on('exit', function(worker, code, signal) {
        cluster.fork();
    });
}

if (cluster.isWorker) {
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
        process.exit(1);
    });

    const app = express();

    const users = require('./routes/users');
    const aspirants = require('./routes/aspirants');
    const students = require('./routes/students');
    const messaging = require('./routes/messaging');

    // Port Number
    const port = process.env.PORT || 8080;

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

    // Endpoints/Routes
    // Index Route
    app.get('/', (req, res) => {
        res.send('Invalid Endpoint');
    });
    app.use('/users', users);
    app.use('/aspirants', aspirants);
    app.use('/students', students);
    app.use('/messaging', messaging);
    // Fetch aspirant picture from the pucblic folder
    app.use('/assets/images/aspirants/:picture', (req, res) => {
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

    // Uncaught error catching
    process.on('uncaughtException', function(err){
        console.error('uncaughtException: ' + err);
        process.exit(1);
    });
}
