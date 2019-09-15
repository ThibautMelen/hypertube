const moment = require('moment')

const logger = (req, res, next) => {
    const time = moment().format('DD/MM/YYYY HH:mm')

    console.info(`[${time}] New request ->\nIP: ${req.ip} | Method: ${req.method} | Original URL: ${req.originalUrl}`)

    const cleanListeners = () => {
        res.removeListener('finish', logFinish)
        res.removeListener('close', logClose)
        res.removeListener('error', logError)
    }

    const logFinish = () => {
        cleanListeners()
        if (res.statusCode >= 500) {
            console.error(`[${time}] End request ->\nIP: ${req.ip} | Status code: ${res.statusCode} | Status Message: ${res.statusMessage} | ${res.get('Content-Length') || 0}b sent`)
        }
        else if (res.statusCode >= 400) {
            console.warn(`[${time}] End request ->\nIP: ${req.ip} | Status code: ${res.statusCode} | Status Message: ${res.statusMessage} | ${res.get('Content-Length') || 0}b sent`)
        }
        else {
            console.log(`[${time}] End request ->\nIP: ${req.ip} | Status code: ${res.statusCode} | Status Message: ${res.statusMessage} | ${res.get('Content-Length') || 0}b sent`)
        }
    }

    const logClose = () => {
        cleanListeners()
        console.warn(`[${time}] Closed request ->\nIP: ${req.ip} | Request aborted by the client`)
    }

    const logError = error => {
        cleanListeners()
        console.error(`[${time}] Request error ->\nIP: ${req.ip} | Request pipeline error: ${error}`)
    }

    res.on('finish', logFinish)
    res.on('close', logClose)
    res.on('error', logError)

    next()
}

module.exports = logger