import { Router } from "express";
import { 
    createInsurance,
    getAllInsurances,
    getInsuranceByName,
    updateInsurance,
    deleteInsurance
  } from "../controllers/insurances.controller.js";

const insuranceRoute = Router();

insuranceRoute.post("/new-insurance", createInsurance);

insuranceRoute.get("/insurances", getAllInsurances);

insuranceRoute.get("/insurance-find-name", getInsuranceByName);

insuranceRoute.patch("/update-insurance/:id", updateInsurance);

insuranceRoute.delete("/delete-insurance/:id", deleteInsurance);

export { insuranceRoute }
