import supertest from "supertest";
import app from "../../app";

describe("Test with the line digits", () => {
  const lineCode = "21290001192110001210904475617405975870000002000";

  it("Line digits valid | 47 digits", async () => {
    const response = await supertest(app).get(`/boleto/${lineCode}`);

    expect(response.status).toBe(200);
    expect(response.body.expirationDate).toBeTruthy();
    expect(response.body.barCode).toEqual(
      "21299758700000020000001121100012100447561740"
    );
    expect(response.body.amount).toBeTruthy();
    expect(response.body.amount).toEqual("20.00");
    expect(response.body.expirationDate).toBeTruthy();
    expect(response.body.expirationDate).toEqual("2018-07-16");
  });

  it("Line digits invalid | < 47 ", async () => {
    const response = await supertest(app).get(
      `/boleto/${lineCode.slice(0, -1)}`
    );

    expect(response.status).toBe(400);
    expect(response.body.barCode).toBeFalsy();
    expect(response.body.amount).toBeFalsy();
    expect(response.body.expirationDate).toBeFalsy();
  });

  it("Line digits invalid | > 48 ", async () => {
    const response = await supertest(app).get(`/boleto/${lineCode + "00"}`);

    expect(response.status).toBe(400);
    expect(response.body.barCode).toBeFalsy();
    expect(response.body.amount).toBeFalsy();
    expect(response.body.expirationDate).toBeFalsy();
  });

  it("Line digits invalid | with letter", async () => {
    const response = await supertest(app).get(
      `/boleto/${lineCode.slice(0, -1) + "a"}`
    );

    expect(response.status).toBe(400);
    expect(response.body.barCode).toBeFalsy();
    expect(response.body.amount).toBeFalsy();
    expect(response.body.expirationDate).toBeFalsy();
  });
});
