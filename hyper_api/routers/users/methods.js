const Joi = require('@hapi/joi')
const passwordHelper = require('../../helpers/password')
const mailTransporter = require('../../helpers/mail')
const tokenHelper = require('../../helpers/token')
const User = require('../../models/users')
const WebTorrent = require('webtorrent')

const userSchema = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }),
    firstName: Joi.string().alphanum().min(1).max(30).required(),
    lastName: Joi.string().alphanum().min(1).max(30).required(),
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    language : Joi.string().valid('english', 'french').required(),
    profilePic: Joi.string().required()
})

module.exports = {
    register: async (req, res) => {
        if (!req.body) {
            return res.status(400).json({success: false})
        }
        try {
            /* JOI User scheme validation */
            const result = Joi.validate({
                email: 'toto@gmail.com',
                firstName: 'Sofian',
                lastName: 'Delhommeau',
                username: 'sdelhomm',
                password: 'toto4242',
                language : 'english',
                profilePic: 'https://pornhub.com'
            }, userSchema)

            /* If validation failed */
            if (result.error !== null) {
                return res.status(400).json({success: false})
            }

            let userExist = await User.findOne({email: result.value.email, username: result.value.username})

            if (userExist) {
                return res.status(200).json({success: false, error: result.value.email === userExist.email ? 'emailExists' : 'usernameExists'})
            }

            let password = await passwordHelper.hashPassword(result.value.password)

            const validationCode = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

            let newUser = new User({
                email: result.value.email,
                firstName: result.value.firstName,
                lastName: result.value.lastName,
                username: result.value.username,
                password,
                language: result.value.language,
                profilePic: result.value.profilePic,
                validationCode
            })
            console.log(newUser)

            await newUser.save()

            res.status(200).json({success: true})

            // try {
            //     await mailTransporter.sendMail({
            //         from: 'Cornflux <matcha42xn@gmail.com>',
            //         to: newUser.email,
            //         subject: 'Welcome in Cornflux !',
            //         text: `
            //         Validation link : ${newUser.validationCode}
            //         `
            //     })
            //     console.log(`Mail sent to ${newUsers.email}`)
            // }
            // catch(err) {
            //     console.error('Mail error :', err)
            // }
        }
        catch(err) {
            console.log(err)
            return res.status(500).json({success: false})
        }
    },

    login: async (req, res) => {
        if (!req.body) {
            return res.status(400).json({success: false})
        }
        try {
            let connectedUser = await User.findOne({email: req.body.email})

            if (!connectedUser) {
                return res.status(200).json({success: false})
            }

            let result = await passwordHelper.comparePassword(req.body.password, connectedUser.password)

            if (result === true) {
                const data = {
                    userId: connectedUser._id
                }

                const token = tokenHelper.createJWTToken({
                    sessionData: data,
                    maxAge: '14d'
                })

                return res.status(200).json({success: true, token})
            }
            else {
                return res.status(200).json({success: false})
            }
        }
        catch(err) {
            console.log(err)
            return res.status(500).json({success: false})
        }
    },

    verify: async (req, res) => {
        if (!req.body || !req.body.token) {
            return res.status(200).json({success: false})
        }

        try {
            const token = req.body.token

            let decodedToken = await tokenHelper.verifyJWTToken(token)

            return res.status(200).json({success: true, data: decodedToken.data})
        }
        catch(error) {
            return res.status(200).json({success: false})
        }
    },

    test: async (req, res) => {
        var client = new WebTorrent()
        var magnetURI = 'magnet:?xt=urn:btih:CE9156EB497762F8B7577B71C0647A4B0C3423E1&dn=Inception+%282010%29+%5B720p%5D+%5BYTS.LT%5D&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'

        client.add(magnetURI, function (torrent) {
            // Got torrent metadata!
            // console.log('Client is downloading:', torrent.infoHash)

            torrent.files.forEach(function (file) {
                // Display the file by appending it to the DOM. Supports video, audio, images, and
                // more. Specify a container element (CSS selector or reference to DOM node).
                console.log(file.name)
            })
        })

        res.send('OK')
    }
}