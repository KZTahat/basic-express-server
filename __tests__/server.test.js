"use strict";

const supertest = require("supertest");
const { app } = require("../src/server");
const request = supertest(app);

describe("server test", () => {
  it('should send "All Good :)" at /test AP', async () => {
    let param = "/";
    let status = 200;
    let message = "All Good :)";
    const response = await request.get(param);
    expect(response.status).toBe(status);
    expect(response.text).toBe(message);
  });
  it("sholud test 404 result", async () => {
    //arrange
    let param = "/anything";
    let status = 404;
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);
  });
  it("sholud test 500 result", async () => {
    //arrange
    let param = "/bad";
    let status = 500;
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);
  });
});
