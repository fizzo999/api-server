'use strict';

const errors = (err, req, res, next) => {
  res.status(500).send('something went wrong and we were too lazy to put more info about WTF happened - so for right now - its just error 500');
};

module.exports = errors;
