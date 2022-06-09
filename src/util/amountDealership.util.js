const amountDealership = (lineDigit) => {
  let value = lineDigit.slice(4, 10) + lineDigit.slice(11, 16);

  if (value == "00000000000") {
    ("There is no amount");
  }

  value = (parseInt(value) / 100).toFixed(2);

  return value;
};

export default amountDealership;
