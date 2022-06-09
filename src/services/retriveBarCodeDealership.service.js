import amountDealership from "../util/amountDealership.util";
import expireDateDealership from "../util/expireDateDealership.util";
import transformToBillDealership from "../util/transformToBillDealership.util";

const retriveBarCodeDealershipService = (barcode) => {
  const bill = transformToBillDealership(barcode);
  const expirationDate = expireDateDealership(barcode);
  const value = amountDealership(barcode);

  return {
    barCode: bill,
    amount: value,
    expirationDate,
  };
};

export default retriveBarCodeDealershipService;
