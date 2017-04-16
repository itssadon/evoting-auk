const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        user_role: req.body.user_role
    });
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success:false, msg:'Failed to register user'})
        } else {
            res.json({success:true, msg:'User registered'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) res.send(err);
        if(!user){
            return res.json({success: false, msg:'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) res.send(err);
            if(isMatch){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 14400
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        user_role: user.user_role
                    }
                });
            } else {
                return res.json({success:false, msg:'Wrong password'});
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.send({user: req.user});
});

// Elcom officers
router.get('/elcom', (req, res, next) => {
    const user_role = 1;
    User.getUsersByUserRole(user_role, (err, users) => {
        if(err) res.send(err);
        if(!users) {
            return res.json({success:false, msg:'User not found'});
        }
        return res.json({
            success: true,
            users: users
        });
    });
});

// Elcom officer
router.get('/elcom/:matricno', (req, res, next) => {
    var matricno = req.params.matricno.replace(/\./g, '/');
    User.getUserByUsername(matricno, (err, elcom) => {
        if(err) res.send(err);
        if(!elcom) {
            return res.json({isElcom:false, msg:'Student is not an ELCOM Officer'});
        }
        return res.json({isElcom: true, msg: 'Student is an ELCOM Officer'});
    });
});

module.exports = router;
