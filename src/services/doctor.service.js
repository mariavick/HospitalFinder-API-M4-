import { getAllDoctors } from "../controllers/doctors.controller.js";
import { DoctorModel } from "../models/Doctor.models.js"

export class DoctorService {
    async createDoctorService( doctor_name, crm, id_hospital, id_specialty) {
        try {
            await DoctorModel.sync();
            const doctorAlreadyExist = await DoctorModel.findOne({
                where: {
                    crm
                }
            });

            // erro personalizado
            if (doctorAlreadyExist) {
                return `Médico já existe`;
            }

            const newDoctor = await DoctorModel.create({
                doctor_name, crm, id_hospital, id_specialty
            });
            return newDoctor;
        } catch (error) {
                return error;
        }
    }
    async getAllDoctorService(){
            return await DoctorModel.findAll();
    }
}