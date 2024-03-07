import { Router } from "express";
import { 
    createHospital,
    getAllHospitals,
    getHospitalByName,
    updateHospital,
    deleteHospital
} from "../controllers/hospital.controllers.js";

const hospitalRoute = Router();

hospitalRoute.post("/new-hospital", createHospital);

hospitalRoute.get("/hospitals", getAllHospitals);

hospitalRoute.get("/hospital-find-name", getHospitalByName);

hospitalRoute.patch("/update-hospital/:id", updateHospital);

hospitalRoute.delete("/delete-hospital/:id", deleteHospital);

export { hospitalRoute }