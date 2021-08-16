"use strict";

const logger = require("../src/middleware/logger.js");

describe("logger middelware", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
    // attach to the consle method
  });
  afterEach(() => {
    consoleSpy.mockRestore();
    // restore console method to it's original state
  });
  it("check if the console have been called", () => {
    //already arranged above
    //act
    logger(req, res, next);
    //assert
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("chcek if 'next' have been called ", () => {
    //already arranged above
    //act
    logger(req, res, next);
    //assert
    expect(next).toHaveBeenCalledWith();
    // toHaveBeenCalled() is not enough, we need to make sure
    // it was called with no args
  });
});
