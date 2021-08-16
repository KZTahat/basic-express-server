"use strict";

module.exports = (req, res, next) => {
  const { name } = req.query;
  if (name) {
    res.status(200).send({
      name: name,
    });
    next();
  } else {
    next("this name is not valid...");
  }
};
