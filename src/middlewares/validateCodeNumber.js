const validateCodeNumber = (request, response, next) => {
  const { barCode } = request.params;

  if (!/[0-9]{47}$/.test(barCode)) {
    return response
      .status(400)
      .json({ error: "the bar code not only contains digits" });
  }

  request.barcode = barCode;

  return next();
};

export default validateCodeNumber;
