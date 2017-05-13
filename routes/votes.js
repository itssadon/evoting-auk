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
        vice_president: req.body.vice_president,
        sec_gen: req.body.sec_gen,
        asst_sec_gen: req.body.asst_sec_gen,
        fin_sec: req.body.fin_sec,
        auditor: req.body.auditor,
        treasurer: req.body.treasurer,
        welfare_I: req.body.welfare_I,
        welfare_II: req.body.welfare_II,
        dir_of_socials: req.body.dir_of_socials,
        pro_I: req.body.pro_I,
        pro_II: req.body.pro_II,
        provost: req.body.provost,
        sales_dir: req.body.sales_dir,
        sports_dir: req.body.sports_dir,
        dir_of_food: req.body.dir_of_food
    });
    Vote.addVote(newVoteSlip, (err, voter) => {
        if(err) {
            res.json({success:false, msg:'Failed to submit vote slip'});
        } else {
            Student.setVoteStatus(newVoteSlip.matricno, (err, status) => {
                if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.president, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.vice_president, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.sec_gen, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.asst_sec_gen, (err, status) => {
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
            Aspirant.updateAspirantVote(newVoteSlip.welfare_I, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.welfare_II, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.dir_of_socials, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.pro_I, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.pro_II, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.provost, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.sales_dir, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.sports_dir, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            Aspirant.updateAspirantVote(newVoteSlip.dir_of_food, (err, status) => {
                //if(err) res.json({success:false, msg:'Failed to update vote status'});
            });
            res.json({success:true, msg:'Vote slip submitted'});
        }
    });
});

// Get vote status of a student
router.get('/status/:matricno', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    var matricno = req.params.matricno.replace(/\./g, '/');
    Student.getVoteStatus(matricno, (err, student) => {
        if(err) res.send(err);
        var voteStatus = student[0].vote_status;
        if(voteStatus === 0) {
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


module.exports = router;
