const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')

const logger = require('./middlewares/logger')

const users = require('./routers/users/routes')

if (process.env.JWT_SECRET === undefined || process.env.PORT === undefined) {
    console.error('Error: Required environment variables not supplied.')
    process.exit(1)
}

//Dev ?
const databaseUrl = 'mongodb://localhost/cornflux_db'

mongoose.connect(databaseUrl, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Database connection error:'))
db.once('open', () => {
    console.info(`Connected to database ${databaseUrl} successfully.`)
})

const app = express()

app.use(helmet())

var allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:8080',
    'http://sofian-delhommeau.fr:3000',
    'http://sofian-delhommeau.fr:8080'
]

//TO BE CHANGED OR REMOVED IN PROD (ACCEPT only localhost)
app.use(cors({
    origin: (origin, callback) => {
    // Allow requests with no origin
    if (!origin) {
        return callback(null, true)
    }
    if(allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.'
      return callback(new Error(msg), false)
    }

    return callback(null, true)
  },
  credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

/* Sets logger function as middleware */
app.use(logger)

// REDIRECT TO MAIN PAGE
app.get('/', (req, res) => {
    res.send('Hello World')
})


/* Load API modules */
app.use('/users', users)

app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}.`))
