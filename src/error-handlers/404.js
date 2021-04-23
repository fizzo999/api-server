'use strict';

const notFound = (req, res, next) => {
  res.status(404).json({ msg: 'Sorry - no such route - check your http address you are requesting'});
  next();
}

module.exports = notFound;
