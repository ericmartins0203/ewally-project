import { Router } from "express";

import retriveBarCodeController from "../controllers/retriveBarCode.controller";
import validateCodeNumber from "../middlewares/validateCodeNumber.middleware";

const routes = Router();

routes.get("/boleto/:barCode", validateCodeNumber, retriveBarCodeController);

export default routes;
