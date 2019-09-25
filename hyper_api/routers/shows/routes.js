const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

const methods = require('./methods')

/*     Handles requests from /shows      */
/*  Router for all shows related methods */

router.route('/search/:query')
.get(auth, methods.search)

router.route('/popular')
.get(auth, methods.popular)

router.route('/play/:id')
.get(auth, methods.play)

router.route('/stream/:hash')
.get(methods.stream)

// router.route('/subtitle/:url')
// .get(auth, methods.subtitle)

router.route('/comment')
.post(auth, methods.comment)


module.exports = router
