const express = require('express')
const router = express.Router()

const methods = require('./methods')
// const auth = require('../../middlewares/auth')

/*     Handles requests from /users      */
/*  Router for all users related methods  */

router.route('/register')
.post(methods.register)

router.route('/login')
.post(methods.login)

router.route('/verify')
.get(methods.verify)

router.route('/test')
.get(methods.test)

module.exports = router
