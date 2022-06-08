const transformToBill = (barcode) => {
  const bill =
    barcode.slice(0, 4) +
    barcode.slice(32, 47) +
    barcode.slice(4, 9) +
    barcode.slice(10, 20) +
    barcode.slice(21, 31);
  return bill;
};

export default transformToBill;
