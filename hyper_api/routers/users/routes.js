const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

const methods = require('./methods')

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

router.route('/:id')
.get(auth, methods.getUser)

router.route('/update')
.patch(auth, methods.update)

router.route('/validate/:key')
.get(auth, methods.validate)


module.exports = router
