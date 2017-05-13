const mongoose = require('mongoose');
const config = require('../config/database');

// Student Schema
const StudentSchema = mongoose.Schema({
    matricno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    vote_status: {
        type: Number,
        required: false
    }
});

const Student = module.exports = mongoose.model('Student', StudentSchema);

module.exports.addStudent = function (student, callback) {
    student.save(callback);
};

module.exports.getStudents = function(callback) {
    Student.find(callback);
};

module.exports.countStudents = function(callback) {
    Student.count(callback);
};

module.exports.getVoteStatus = function(matricno, callback) {
    const query = {matricno: matricno}
    Student.find(query, callback);
};

module.exports.setVoteStatus = function(matricno, callback) {
    const query = {matricno: matricno}
    Student.update(query, {$set: {"vote_status": 1}}, callback);
}
