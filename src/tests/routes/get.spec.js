const supertest = require("supertest");
const app = require("../../app");

// import supertest from "supertest";
// import app from "../../app";

describe("Test with the line digits", () => {
  it("Line digits valid | 47 digits", async () => {
    const lineCode = "896100000000599800010119053332010064260000157446";

    const response = await supertest(app).get(`/boleto/${lineCode}`);

    expect(response.status).toBe(200);
  });
});
