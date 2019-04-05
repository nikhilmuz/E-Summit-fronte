const debug = require('debug')('init:server')
const http = require('http')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const compression = require('compression')
require('dotenv').config()
const app = express()

app.use(compression())

const port = normalizePort(8000)
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

app.use(favicon(path.join(__dirname, 'build/favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'bower_components')))

app.get(
  '*',
  (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
  },
)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Invalid Route')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  // res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  const message = err.message
  res.status(err.status || 500).json({ message })
})

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const p = parseInt(val, 10)

  if (isNaN(p)) {
    // named pipe
    return val
  }

  if (p >= 0) {
    // port number
    return p
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`
  debug(`Listening on ${bind}`)
  if (process.env.NODE_ENV === 'production') {
    console.log('Production')
  } else {
    console.log('Development')
  }
}

module.exports = app
