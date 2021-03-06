const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_role: {
        type: Number,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
    var regex = new RegExp(["^", username, "$"].join(""), "i");
    const query = {username: regex};
    User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) res.send(err);
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) res.send(err);
        callback(null, isMatch);
    });
};

module.exports.getUsersByUserRole = function(user_role, callback) {
    const query = {user_role: user_role};
    User.find(query, callback);
};

module.exports.deleteUserByUsername = function(username, callback) {
    const query = {username: username};
    User.deleteOne(query, callback);
};

module.exports.resetPassword = function(olduser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(olduser.password, salt, (err, hash) => {
            if (err) res.send(err);
            olduser.password = hash;
            const query = {username: olduser.username};
            User.update(query, {$set: {"password": olduser.password}}, callback);
        });
    });
};
