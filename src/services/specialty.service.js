import { getAllSpecialtys } from "../controllers/specialty.controller.js";
import { SpecialtyModel } from "../models/Specialty.models.js"

export class SpecialtyService {
    async createSpecialtyService(specialty_name) {
        try {
            await SpecialtyModel.sync();
            const specialtyAlreadyExist = await SpecialtyModel.findOne({
                where: {
                    specialty_name
                }
            });
            if (specialtyAlreadyExist) {
                return `Especialidade já existe`;
            }
            
            const newSpecialty = await SpecialtyModel.create({
                specialty_name
            });
            return newSpecialty;
        } catch (error) {
                return error;
        }
    }
    async getAllSpecialtysService(){
            return await SpecialtyModel.findAll();
    }
}