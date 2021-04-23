'use strict';

const logger = (req, res, next) => {
  console.log('Requested data', req.method, req.path);
  next();
}

module.exports = logger;
