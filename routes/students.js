const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Aspirant = require('../models/aspirant');

// Get all registered aspirants
router.get('', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Aspirant.getStudents((err, students) => {
        if(err) res.send(err);
        if(!students) {
            return res.json({success:false, msg:'Students not found'});
        }
        return res.json({
            success: true,
            students: students
        });
    });
});

// Add student
router.post('/student', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let newStudent = new Aspirant({
        matricno: req.body.matricno,
        name: req.body.studentName,
        email: req.body.email,
        phone: req.body.email,
        department: req.body.department,
        course: req.body.course
    });
    Student.addStudent(newStudent, (err, user) => {
        if(err){
            res.json({success:false, msg:'Failed to accredit student'})
        } else {
            res.json({success:true, msg:'Student accredited'});
        }
    });
});

module.exports = router;
