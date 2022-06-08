import { Router } from "express";

import retriveBarCodeController from "../controllers/retriveBarCode.controller";
import validateCodeNumber from "../middlewares/validateCodeNumber";

const routes = Router();

routes.get("/boleto", (req, res) => res.send("olá"));

routes.get("/boleto/:barCode", validateCodeNumber, retriveBarCodeController);

export default routes;
