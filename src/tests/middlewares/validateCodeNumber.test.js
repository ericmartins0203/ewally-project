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

  it("will return error message without barCode. Status 400 | Bad Request", () => {
    mockReq.params = "";
    validateCodeNumber(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(400);

    expect(mockRes.json).toBeCalled();
    expect(mockRes.json).toBeCalledWith({
      error: "the line digit should only contains digits",
    });
    expect(mockNext).not.toBeCalled();
  });

  it("will pass. Status 200 | Ok", () => {
    mockReq.params.barCode = "21290001192110001210904475617405975870000002000";
    validateCodeNumber(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalled();
    expect(mockRes.status).toBeCalledWith(200);

    // expect(mockRes.json).toBeCalled();
    // expect(mockNext).toBeCalled();
  });
});
