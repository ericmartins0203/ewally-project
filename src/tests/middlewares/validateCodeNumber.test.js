import validateCodeNumber from "../../middlewares/validateCodeNumber.middleware";
import { jest } from "@jest/globals";

describe("unit test for validateCodeNumber middleware", () => {
  const mockReq = {};
  const mockRes = {};
  const mockNext = jest.fn();

  beforeEach(() => {
    mockRes.json = jest.fn().mockReturnValue(mockRes);
    mockRes.status = jest.fn().mockReturnValue(mockRes);
  });

  it("will pass. Calling Next", () => {
    mockReq.params = {
      barCode: "21290001192110001210904475617405975870000002000",
    };

    validateCodeNumber(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
  });

  it("will return error message without barCode. Status 400 | Bad Request", () => {
    mockReq.params = { barCode: "" };
    validateCodeNumber(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(400);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledWith({
      error: "the line digit should only contains digits",
    });
  });

  it("will return error message wrong length. Status 400 | Bad Request", () => {
    mockReq.params = {
      barCode: "2129000119211000121090447561740597587000000200",
    };
    validateCodeNumber(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(400);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledWith({
      error: "the line digit should have 47 or 48 digits",
    });
  });

  it("will return error message barCode with letter. Status 400 | Bad Request", () => {
    mockReq.params = {
      barCode: "2129000119211000121090447561740597587000000200a",
    };
    validateCodeNumber(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(400);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledWith({
      error: "the line digit should only contains digits",
    });
  });
});
