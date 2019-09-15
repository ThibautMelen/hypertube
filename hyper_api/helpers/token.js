const jwt = require('jsonwebtoken')

module.exports = {
    verifyJWTToken: (token) => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                if (err || !decodedToken) {
                    return reject(err)
                }

                resolve(decodedToken)
            })
        })
    },

    createJWTToken: (details) => {
        if (typeof details !== 'object') {
            details = {}
        }

        const token = jwt.sign(
            { data: details.sessionData || "" },
            process.env.JWT_SECRET,
            { expiresIn: details.maxAge || "7d", algorithm: 'HS256' }
        )

        return token
    }
}
