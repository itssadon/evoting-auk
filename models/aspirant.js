const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

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
    lastname: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    reason_for_contesting: {
        type: Text,
        required: true
    },
    picture: {
        type: Blob,
        required: true
    },
    votes: {
        type: Number,
        required: false
    }
});
