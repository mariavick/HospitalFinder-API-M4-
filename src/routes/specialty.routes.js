import { Router } from "express";
import { 
    createSpecialty,
    getAllSpecialtys,
    getSpecialtyByName,
} from "../controllers/specialty.controller.js";

const specialtyRoute = Router();

specialtyRoute.post("/new-specialty", createSpecialty);

specialtyRoute.get("/specialtys", getAllSpecialtys);

specialtyRoute.get("/specialty-find-name", getSpecialtyByName);

export { specialtyRoute }