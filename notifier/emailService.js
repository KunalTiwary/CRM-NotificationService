
const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'riyabansaltest@gmail.com',
        pass: 'ckyrrglvjvwxnkjy',
    },
    secure: true,
});

