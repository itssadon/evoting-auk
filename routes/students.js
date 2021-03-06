const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const http = require('http');
const config = require('../config/database');
const Student = require('../models/student');

// Get all accreditted students
router.get('', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Student.getStudents((err, students) => {
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
    let newStudent = new Student({
        matricno: req.body.matricno,
        name: req.body.studentName,
        email: req.body.email,
        phone: req.body.phone,
        department: req.body.department,
        course: req.body.course
    });
    Student.addStudent(newStudent, (err, user) => {
        if(err){
            console.log(err);
            res.json({success:false, msg:'Failed to accredit student'})
        } else {
            res.json({success:true, msg:'Student accredited'});
        }
    });
});

// Count all accreditted students
router.get('/count', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    Student.countStudents((err, students) => {
        if(err) res.send(err);
        if(!students) {
            return res.json({
                success:false,
                number_of_students:'0'
            });
        }
        return res.json({
            success: true,
            number_of_students: students
        });
    });
});

router.get('/student/:matricno', (req, res, next) => {
    var apiUrl = "http://aukapi.nacossatbu.com.ng/v1/student/";
    var matricno = req.params.matricno;
    http.get(
        apiUrl+matricno,
        function(response) {
            // Continuously update stream with data
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function () {
                body = JSON.parse(body);
                if(!body.status) {
                    return res.json({
                        success: false,
                        msg: 'Record not Found!'
                    });
                }
                return res.json({
                    success: true,
                    student_info: body.student[0]
                });
            });
        }
    );
});

module.exports = router;
