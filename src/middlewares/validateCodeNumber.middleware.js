const validateCodeNumber = (request, response, next) => {
  const { barCode } = request.params;

  if (!/^[0-9]+$/.test(barCode)) {
    return response
      .status(400)
      .json({ error: "the line digit should only contains digits" });
  }

  if (barCode.length == 47 && barCode[0] == "8") {
    request.barcode = barCode;
    return response.status(400).json({ error: "the line digit is not valid" });
  }

  if (barCode.length == 47) {
    request.barcode = barCode;
    return next();
  }

  if (barCode.length == 48 && barCode[0] != "8") {
    request.barcode = barCode;
    return response.status(400).json({ error: "the line digit is not valid" });
  }

  if (barCode.length == 48) {
    request.barcodeDealership = barCode;
    return next();
  }

  return response
    .status(400)
    .json({ error: "the line digit should have 47 or 48 digits" });
};

export default validateCodeNumber;
