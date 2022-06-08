import retriveBarCodeService from "../services/retriveBarCode.service";

const retriveBarCodeController = (req, res) => {
  const barCode = req.barcode;

  const barcode = retriveBarCodeService(barCode);

  return res.json(barcode);
};

export default retriveBarCodeController;
