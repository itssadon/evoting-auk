const mongoose = require('mongoose');
const config = require('../config/database');

// Student Schema
const VoteSchema = mongoose.Schema({
    matricno: {
        type: String,
        required: true
    },
    president: {
        type: String,
        required: false
    },
    sec_gen: {
        type: String,
        required: false
    },
    vice_president_I: {
        type: String,
        required: false
    },
    fin_sec: {
        type: String,
        required: false
    },
    auditor: {
        type: String,
        required: false
    },
    treasurer: {
        type: String,
        required: false
    },
    software: {
        type: String,
        required: false
    },
    pro_I: {
        type: String,
        required: false
    },
    liason: {
        type: String,
        required: false
    },
    sports_dir: {
        type: String,
        required: false
    },
    vice_president_II: {
        type: String,
        required: false
    },
    asst_sec_gen: {
        type: String,
        required: false
    },
    dir_of_socials: {
        type: String,
        required: false
    },
    dir_of_business: {
        type: String,
        required: false
    },
    welfare: {
        type: String,
        required: false
    },
    dir_of_program: {
        type: String,
        required: false
    },
    dir_of_library: {
        type: String,
        required: false
    },
    asst_welfare: {
        type: String,
        required: false
    },
    asst_sport: {
        type: String,
        required: false
    },
    pro_II: {
        type: String,
        required: false
    }
});

const Vote = module.exports = mongoose.model('Vote', VoteSchema);

module.exports.addVote = function (voteSlip, callback) {
    voteSlip.save(callback);
};

module.exports.getVoteSlip = function(matricno, callback) {
    const query = {matricno: matricno};
    Vote.find(query, callback);
};
