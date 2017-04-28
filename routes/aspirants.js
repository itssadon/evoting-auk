const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Aspirant = require('../models/aspirant');

// Get all registered aspirants
router.get('', (req, res, next) => {
    Aspirant.getAspirants((err, aspirants) => {
        if(err) res.send(err);
        if(!aspirants) {
            return res.json({success:false, msg:'Aspirants not found'});
        }
        return res.json({
            success: true,
            aspirants: aspirants
        });
    });
});

// Register an aspirant
router.post('/aspirant', (req, res, next) => {
    let newAspirant = new Aspirant({
        matricno: req.body.matricno,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        address: req.body.address,
        cgpa: req.body.cgpa,
        office: req.body.office,
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

// Get an aspirant
router.get('/aspirant/:id', (req, res, next) => {
    const id = req.params.id;
    Aspirant.getAspirantById(id, (err, aspirant) => {
        if(err) res.send(err);
        if(!aspirant) {
            return res.json({
                isAspirant: false,
                msg: 'Aspirant not found'
            });
        }
        return res.json({
            isAspirant: true,
            msg: 'Student is an Aspirant',
            aspirant: aspirant
        });
    });
});

// Get all aspirants by position
router.get('/office/:office', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const office = req.params.office;
    Aspirant.getAspirantsByOffice(office, (err, aspirants) => {
        if(err) res.send(err);
        if(!aspirants) {
            return res.json({
                success: false,
                msg: 'No aspirants registered for the office of ' + office
            });
        }
        return res.json({
            success: true,
            aspirants: aspirants
        });
    });
});

module.exports = router;
