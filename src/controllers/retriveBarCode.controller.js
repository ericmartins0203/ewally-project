import retriveBarCodeService from "../services/retriveBarCode.service";
import retriveBarCodeDealershipService from "../services/retriveBarCodeDealership.service";

const retriveBarCodeController = (req, res) => {
  let barcode = "";

  if (req.barcode) {
    barcode = retriveBarCodeService(req.barcode);
  }

  if (req.barcodeDealership) {
    barcode = retriveBarCodeDealershipService(req.barcodeDealership);
  }

  return res.json(barcode);
};

export default retriveBarCodeController;
