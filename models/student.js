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
    }
});

const Student = module.exports = mongoose.model('Student', StudentSchema);

module.exports.addStudent = function (Student, callback) {
    Student.save(callback);
};

module.exports.getStudents = function(callback) {
    Student.find(callback);
};
