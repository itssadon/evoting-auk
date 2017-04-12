const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const fs = require('fs');

// Aspirant Schema
const AspirantSchema = mongoose.Schema({
    matricno: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    cgpa: {
        type: String,
        required: true
    }
    position: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: false
    }
});

const Aspirant = module.exports = mongoose.model('Aspirant', AspirantSchema);

module.exports.addAspirant = function (Aspirant, callback) {
    var dt = new Date(); //current date and time of server
    var text = ""; //random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    var base64d = Aspirant.picture.replace(/^data:image\/png;base64,/, "");
    var path = "./public/images/" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
    var path1 = "/images/" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";

    fs.writeFile(path, base64d, 'base64', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    Aspirant.save(callback);
};
