const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const request = require('request');
const nodemailer = require('nodemailer');

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

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "abubakarhassan59@gmail.com",
        pass: "Sadon4ME2!#"
    }
});

const users = require('./routes/users');
const aspirants = require('./routes/aspirants');
const students = require('./routes/students');

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

// Endpoints/Routes
app.use('/users', users);
app.use('/aspirants', aspirants);
app.use('/students', students);
// proxy request to external endpont
app.use('/proxy', function(req, res, err) {
    var url = req.url.replace('/?url=', '');
    try {
        req.pipe(request(url)).pipe(res);
    } catch (err) {
        console.log(err);
        res.end;
    }

});
// Send mail
app.use('/send', function(req, res) {
    var mailOptions = {
        from: 'SUG ATBU ELCOM <elcom@sugatbu.com>',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }
    console.log(mailOptions); //
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error) {
            console.log(error);
            return res.json({success:false, msg:'Failed to send mail'})
        } else {
            console.log(response);
            console.log("Message sent: " + response.message);
            return res.json({success:true, msg:'Message sent: ' + response.message});
        }
    });
});

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

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
