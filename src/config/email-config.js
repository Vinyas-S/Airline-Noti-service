const nodemailer = require('nodemailer');
const {GMAIL_EMAIL, GMAIL_PASS} =require('./server-config')

const mailSender = nodemailer.createTransport({
    
    service:'Gmail',
    auth:{
        user:GMAIL_EMAIL,
        password:GMAIL_PASS
    },

});

module.exports = mailSender