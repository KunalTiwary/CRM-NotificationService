
const nodemailer = require('nodemailer');

// Email is sent through this 
module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'riyabansaltest@gmail.com',
        pass: 'ckyrrglvjvwxnkjy',
    },
    secure: true,
});

