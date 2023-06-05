const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    GMAIL_PASS : process.env.GMAIL_PASS,
    GMAIL_EMAIL : process.env.GMAIL_EMAIL,
    NODE_TLS_REJECT_UNAUTHORIZE : process.env.NODE_TLS_REJECT_UNAUTHORIZE
}