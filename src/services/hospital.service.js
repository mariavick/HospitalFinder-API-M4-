import { HospitalModel } from "../models/Hospital.models.js"

export class HospitalService {
    async createHospitalService(hospital_name, capacity) {
        try {
            await HospitalModel.sync();
            const hospitalAlreadyExist = await HospitalModel.findOne({
                where: {
                    hospital_name
                }
            });

            // erro personalizado
            if (hospitalAlreadyExist) {
                return `Hospital já existe`;
            }

            const newHospital = await HospitalModel.create({
                hospital_name, capacity
            });
            return newHospital;
        } catch (error) {
                return error;
        }
    }
    
    async getAllHospitalService(){
            return await HospitalModel.findAll();
    }
    async updateHospitalService(){
            const { id } = req.params;
            const { newHospital } = req.body;
        
            const hospitalAlreadyExist = await HospitalModel.findOne({
                where: {
                    id
                }
            });
        
            if (hospitalAlreadyExist) {
                return res.json({ message: `Usuario ${ERRORS.NOT_FOUND}` });
            }
        
            await HospitalModel.update({ hospital: newHospital }, {
                where: {
                    id
                }
            });
        }
    }