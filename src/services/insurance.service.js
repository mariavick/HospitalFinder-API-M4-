import { getAllInsurance } from "../controllers/insurance.controller.js";
import { InsuranceModel } from "../models/Insurance.models.js"

export class InsuranceService {
    async createInsuranceService(insurance_name, type_services) {
        try {
            await InsuranceModel.sync();
            const insuranceAlreadyExist = await InsuranceModel.findOne({
                where: {
                    cpf
                }
            });

            // erro personalizado
            if (insuranceAlreadyExist) {
                return `Usuario já existe`;
            }

            const newInsurance = await InsuranceModel.create({
                insurance_name, type_services
            });
            return newInsurance;
        } catch (error) {
                return error;
        }
    }
    async getAllInsuranceService(){
            return await InsuranceModel.findAll();
    }
}