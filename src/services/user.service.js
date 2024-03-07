import { getAllUsers } from "../controllers/users.controller.js";
import { UserModel } from "../models/User.models.js"

export class UserService {
    async createUserService(name, age, cpf, phone_number, insurance_id) {
        try {
            await UserModel.sync();
            const userAlreadyExist = await UserModel.findOne({
                where: {
                    cpf
                }
            });

            // erro personalizado
            if (userAlreadyExist) {
                return `Usuario já existe`;
            }

            const newUser = await UserModel.create({
                name, age, cpf, phone_number, insurance_id
            });
            return newUser;
        } catch (error) {
                return error;
        }
    }
    async getAllUserService(){
            return await UserModel.findAll();
    }
}