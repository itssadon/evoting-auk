const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/aspirant');

// Register
router.post('/register', (req, res, next) => {
    let newAspirant = new Aspirant({
        matricno: req.body.matricno,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        cgpa: req.body.cgpa,
        position: req.body.position,
        reason: req.body.reason,
        picture: req.body.picture,
        vote: 0
    });
    Aspirant.addAspirant(newAspirant, (err, user) => {
        if(err){
            res.json({success:false, msg:'Failed to register aspirant'})
        } else {
            res.json({success:true, msg:'Aspirant registered'});
        }
    });
});

module.exports = router;
