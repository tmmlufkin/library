'use strict'

function initSentry() {
  const raven = require('raven')

  raven.config(process.env.SENTRY_DSN).install()
  return raven.errorHandler() // @COMBAK or request handler? Both?
}

// error functions are special. They have to be attached directly to the app.
module.exports = process.env.SENTRY_DSN
  ? initSentry()
  : (res, req, next) => next() // empty airbrake code
