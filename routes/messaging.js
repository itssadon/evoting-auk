const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const https = require('https');
const nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "abubakarhassan59@gmail.com",
        pass: "Sadon4ME2!#"
    }
});

router.post('/mail', (req, res, next) => {
    var mailOptions = {
        from: 'SUG FPTB ELCOM <elcom@sugatbu.com>',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error) {
            console.log(error);
            return res.json({success:false, msg:'Failed to send mail'});
        } else {
            return res.json({success:true, msg:'Email message sent'});
        }
    });
});

router.post('/sms', (req, res, next) => {
    var apiUrl = 'https://api.smartsmssolutions.com/smsapi.php?username=sadon12&password=LIacAnuclommIc2';
    var sender = 'FPTB ELCOM';
    var recipient = req.body.recipient;
    var message = req.body.message;
    https.get(
        apiUrl+'&sender='+sender+'&recipient='+recipient+'&message='+message,
        function(response) {
            response.on('error', function(error) {
                console.log('SMS sending error: '+error);
                return res.json({
                    success: false,
                    msg: 'Failed to send sms'
                });
            });
            // Continuously update stream with data
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                if (body == '2904') {
                    return res.json({
                        success: false,
                        msg: 'SMS Sending Failed'
                    });
                } else if(body == '2905') {
                    return res.json({
                        success: false,
                        msg: 'Invalid username/password combination'
                    });
                } else if(body == '2906') {
                    return res.json({
                        success: false,
                        msg: 'Credit exhausted'
                    });
                } else if(body == '2907') {
                    return res.json({
                        success: false,
                        msg: 'Gateway unavailable'
                    });
                } else if(body == '2908') {
                    return res.json({
                        success: false,
                        msg: 'Invalid schedule date format'
                    });
                } else if(body == '2909') {
                    return res.json({
                        success: false,
                        msg: 'Unable to schedule'
                    });
                } else if(body == '2910') {
                    return res.json({
                        success: false,
                        msg: 'Username is empty'
                    });
                } else if(body == '2911') {
                    return res.json({
                        success: false,
                        msg: 'Password is empty'
                    });
                } else if(body == '2912') {
                    return res.json({
                        success: false,
                        msg: 'Recipient is empty'
                    });
                } else if(body == '2913') {
                    return res.json({
                        success: false,
                        msg: 'Message is empty'
                    });
                } else if(body == '2914') {
                    return res.json({
                        success: false,
                        msg: 'Sender is empty'
                    });
                } else if(body == '2915') {
                    return res.json({
                        success: false,
                        msg: 'One or more required fields are empty'
                    });
                } else if(body == '2916') {
                    return res.json({
                        success: false,
                        msg: 'Sender ID not allowed by the operator.'
                    });
                }
                return res.json({
                    success: true,
                    msg: body
                });
            });
        }
    );
});

router.get('/sms', (req, res, next) => {
    var apiUrl = 'https://api.smartsmssolutions.com/smsapi.php?username=sadon12&password=LIacAnuclommIc2';
    https.get(
        apiUrl+'&balance=true&recipient=null',
        function(response) {
            response.on('error', function(error) {
                console.log('Error: '+error);
                return res.json({
                    success: false,
                    msg: 'Failed to get sms balance'
                });
            });
            // Continuously update stream with data
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                return res.json({
                    success: true,
                    sms_balance: body
                });
            });
        }
    );
});

module.exports = router;
