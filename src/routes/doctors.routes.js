import { Router } from "express";
import { 
    createDoctor,
    getAllDoctors,
    getDoctorByName,
    updateDoctor,
    deleteDoctor
  } from "../controllers/doctors.controller.js";

const doctorRoute = Router();

doctorRoute.post("/new-doctor", createDoctor);

doctorRoute.get("/doctors", getAllDoctors);

doctorRoute.get("/doctor-find-name", getDoctorByName);

doctorRoute.patch("/update-doctor/:id", updateDoctor);

doctorRoute.delete("/delete-doctor/:id", deleteDoctor);

export { doctorRoute }