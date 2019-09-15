const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'matcha42xn@gmail.com',
        pass: '&R7c%q(piSqd8q*xqb<*'
    }
})

module.exports = transporter