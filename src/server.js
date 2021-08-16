"use strict";

const express = require("express");
const app = express();
const notFoundHandler = require("./errorHandlers/404.js");
const internalServerError = require("./errorHandlers/500");
const logger = require("./middleware/logger.js");
const validator = require("./middleware/validator.js");

// app.use(axpress.json());
app.use(logger); // we be used from by all the APs

// Proof Of Life
app.get("/", (req, res) => {
  res.status(200).send("All Good :)");
});


app.get("/person", validator, (req, res) => {});

app.get("/bad", (req, res, next) => {
  next(`this is a bad end point`);
});

app.use("*", notFoundHandler);
app.use(internalServerError);

function start(port) {
  app.listen(port, () => console.log(`server listining On port ${port}`));
}

module.exports = {
  start,
  app,
};
