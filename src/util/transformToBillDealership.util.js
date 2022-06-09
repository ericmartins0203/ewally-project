const transformToBillDealership = (barcode) => {
  const bill =
    barcode.slice(0, 11) +
    barcode.slice(12, 23) +
    barcode.slice(24, 35) +
    barcode.slice(36, 47);
  return bill;
};

export default transformToBillDealership;
