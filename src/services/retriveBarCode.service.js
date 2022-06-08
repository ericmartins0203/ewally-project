import expireDateUtil from "../util/expireDate.util";
import transformToBill from "../util/transformToBill.util";

const retriveBarCodeService = (barcode) => {
  const bill = transformToBill(barcode);
  const expirationDate = expireDateUtil(barcode);

  return {
    barCode: bill,
    amount: "",
    expirationDate,
  };
};

export default retriveBarCodeService;
