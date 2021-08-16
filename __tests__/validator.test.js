"use strict";

const supertest = require("supertest");
const { app } = require("../src/server.js");
const request = supertest(app);

describe("validator.js file test", () => {
  it("should check the result if no name in the query string", async () => {
    let param = "/person";
    let status = 500;
    const response = await request.get(param);
    expect(response.status).toBe(status);
  });
  it("should check the result if name in the query string is correct", async () => {
    let param = "/person?name=khaled";
    let status = 200;
    const response = await request.get(param);
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual('object');
    expect(response.body.name).toEqual('khaled');
  });
});
