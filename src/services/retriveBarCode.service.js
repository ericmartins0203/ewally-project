import amount from "../util/amount.util";
import expireDate from "../util/expireDate.util";
import transformToBill from "../util/transformToBill.util";

const retriveBarCodeService = (barcode) => {
  const bill = transformToBill(barcode);
  const expirationDate = expireDate(barcode);
  const value = amount(barcode);

  return {
    barCode: bill,
    amount: value,
    expirationDate,
  };
};

export default retriveBarCodeService;
