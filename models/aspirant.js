const mongoose = require('mongoose');
const config = require('../config/database');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'evoting-atbu',
    api_key: '936118271562774',
    api_secret: 'FWyXmy3Yogcpsrpq9jnoPm56Lf4'
});

// Aspirant Schema
const AspirantSchema = mongoose.Schema({
    matricno: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cgpa: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: false
    }
});

const Aspirant = module.exports = mongoose.model('Aspirant', AspirantSchema);

module.exports.addAspirant = function (aspirant, callback) {
    // File upload for promise api
    cloudinary.uploader.upload(aspirant.picture, {tags:'basic_sample'})
    .then(function(image) {
        aspirant.picture = image.url;
        aspirant.save(callback);
    })
    .catch(function(err) {
        if (err){ console.warn(err); res.send(err);}
    });
};

module.exports.getAspirants = function(callback) {
    const mysort = { office: 1 };
    Aspirant.find(callback).sort(mysort);
};

module.exports.getAspirant = function(matricno, callback) {
    const query = {matricno: matricno};
    Aspirant.find(query, callback);
};

module.exports.getAspirantsByOffice = function(office, callback) {
    const query = {office: office};
    Aspirant.find(query, callback);
};

module.exports.updateAspirantVote = function(matricno, callback) {
    const query = {matricno: matricno};
    Aspirant.update(query, {$inc: {"votes":1}}, callback);
};

module.exports.deleteAspirant = function(matricno, callback) {
    const query = {matricno: matricno};
    Aspirant.deleteOne(query, callback);
};
