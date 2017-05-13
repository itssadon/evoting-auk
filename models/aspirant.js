const mongoose = require('mongoose');
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
    address: {
        type: String,
        required: true
    },
    cgpa: {
        type: String,
        required: true
    },
    office: {
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

module.exports.addAspirant = function (aspirant, callback) {
    var dt = new Date(); //current date and time of server
    var text = ""; //random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    var base64d = aspirant.picture.replace(/^data:image\/[a-z]+;base64,/, "");
    var path = "./public/assets/images/aspirants/" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
    var path1 = "/assets/images/aspirants/" + text + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
    aspirant.picture = path1;

    try {
        fs.statSync("./public/assets/images/aspirants/");
    } catch(e) {
        fs.mkdirSync("./public/assets/images/aspirants/");
    }

    fs.writeFile(path, base64d, 'base64', function(err) {
        if(err) res.send(err);
        aspirant.save(callback);
    });
};

module.exports.getAspirants = function(callback) {
    Aspirant.find(callback);
};

module.exports.getAspirantById = function(id, callback){
    Aspirant.findById(id, callback);
};

module.exports.getAspirantsByOffice = function(office, callback) {
    const query = {office: office}
    Aspirant.find(query, callback);
};

module.exports.updateAspirantVote = function(matricno, callback) {
    const query = {matricno: matricno}
    Aspirant.update(query, {$inc: {"votes":1}}, callback);
}
