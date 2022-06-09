// import validateCodeNumber from "../../middlewares/validateCodeNumber.middleware";

// describe("unit test for validateCodeNumber middleware", () => {
//   const mockReq = {};
//   const mockRes = {};
//   const mockNext = jest.fn();

//   beforeEach(() => {
//     mockRes.json = jest.fn().mockReturnValue(mockRes);
//     mockRes.status = jest.fn().mockReturnValue(mockRes);
//   });

//   it("will return error message without barCode. Status 400 | Bad Request", () => {
//     mockReq.params = "";
//     validateCodeNumber(mockReq, mockRes, mockNext);

//     expect(mockRes.status).toBeCalled();
//     expect(mockRes.status).toBeCalledWith(400);

//     expect(mockRes.json).toBeCalled();
//     expect(mockRes.json).toBeCalledWith({
//       error: "the bar code not only contains digits",
//     });
//   });

//   it("will return error message with worng badCode. Status 400 | Bad Request", () => {
//     mockReq.params = "";
//     validateCodeNumber(mockReq, mockRes, mockNext);

//     expect(mockRes.status).toBeCalled();
//     expect(mockRes.status).toBeCalledWith(400);

//     expect(mockRes.json).toBeCalled();
//     expect(mockRes.json).toBeCalledWith({
//       message: "Missing authorization headers",
//     });
//   });
// });
