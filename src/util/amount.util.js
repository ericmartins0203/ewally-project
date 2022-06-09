const amount = (barcode) => {
  let value = barcode.slice(37, 47);
  value = (parseInt(value) / 100).toFixed(2);

  return value;
};

export default amount;
