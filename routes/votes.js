const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const https = require('https');
const config = require('../config/database');
const Vote = require('../models/vote');
const Student = require('../models/student');
const Aspirant = require('../models/aspirant');

// Get all aspirants and their results
router.get('', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    //
});

// Add vote
router.post('', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let newVoteSlip = new Vote({
        matricno: req.body.matricno,
        president: req.body.president,
        sec_gen: req.body.sec_gen,
        vice_president_I: req.body.vice_president_I,
        fin_sec: req.body.fin_sec,
        auditor: req.body.auditor,
        treasurer: req.body.treasurer,
        software: req.body.software,
        pro_I: req.body.pro_I,
        liason: req.body.liason,
        sports_dir: req.body.sports_dir,
        vice_president_II: req.body.vice_president_II,
        asst_sec_gen: req.body.asst_sec_gen,
        dir_of_socials: req.body.dir_of_socials,
        dir_of_business: req.body.dir_of_business,
        welfare: req.body.welfare,
        dir_of_program: req.body.dir_of_program,
        dir_of_library: req.body.dir_of_library,
        asst_welfare: req.body.asst_welfare,
        asst_sport: req.body.asst_sport,
        pro_II: req.body.pro_II
    });
    Vote.addVote(newVoteSlip, (err, voter) => {
        if (err) {
            res.json({success:false, msg:'Failed to submit vote slip'});
        }
        Student.setVoteStatus(newVoteSlip.matricno, (err, status) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Failed to update vote status'
                });
            }
            Aspirant.updateAspirantVote(newVoteSlip.president, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.sec_gen, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.vice_president_I, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.fin_sec, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.auditor, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.treasurer, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.software, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.pro_I, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.liason, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.sports_dir, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.vice_president_II, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.asst_sec_gen, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.dir_of_socials, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.dir_of_business, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.welfare, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.dir_of_program, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.dir_of_library, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.asst_welfare, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.asst_sport, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.pro_II, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            res.json({
                success: true,
                msg: 'Vote slip submitted'
            });
        });
    });
});

// Get vote status of a student
router.get('/status/:matricno', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    var matricno = req.params.matricno.replace(/\-/g, '/');
    Student.getVoteStatus(matricno, (err, student) => {
        if(err) res.send(err);
        var voteStatus = student[0].vote_status;
        if(!voteStatus || voteStatus === 0) {
            return res.json({
                hasVoted: false,
                msg: 'Student has not voted'
            });
        }
        return res.json({
            hasVoted: true,
            msg: 'Student has voted'
        });
    });
});

// Fetch voter's receipt
router.get('/receipt/:matricno', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    var matricno = req.param.matricno;
    Vote.getVoteSlip(matricno, (err, slip) => {
        if (err) res.send(err);
        return res.json({
            success: true,
            voteReceipt: slip
        });
    });
});

module.exports = router;
