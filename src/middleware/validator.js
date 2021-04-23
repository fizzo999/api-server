'use strict';

const validator = (req, res, next) => {
  // if (req.query.name) {
    // res.send(req.query);
    next();
  // } else {
    // res.status(500).json( {msg: 'not found'} );
    // next('Something went seriously wrong, Dude');
  // }
};

module.exports = validator;
