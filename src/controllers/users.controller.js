import { UserModel } from "../models/User.models.js";
import { UserService } from "../services/user.service.js";

const instanceServiceUser = new UserService();

const createUser = async (req, res) => {
    const { name, age, cpf, phone_number, insurance_id } = req.body;
    const newUser = await instanceServiceUser.createUserService(name, age, cpf, phone_number, insurance_id);
    return res
        .status(201)
        .json({
            message: "Usuário criado com sucesso!",
            newUser
        });
}

const getAllUsers = async (req, res) => {
    try {
        const users = await instanceServiceUser.getAllUserService();
        return res.json({ users });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar os usuários" });
    }
}

const getUserByName = async (req, res) => {
    const { name } = req.body;
    const UserFindName = await UserModel.findOne({
        where: {
            name
        }
    });
    return res.json({ UserFindName });
}

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    const userAlreadyExist = await UserModel.findOne({
        where: {
            id
        }
    });

    if (userAlreadyExist) {
        return res.json({ message: `Usuario ${ERRORS.NOT_FOUND}` });
    }

    await UserModel.update({ password: newPassword }, {
        where: {
            id
        }
    });
    const messageUpdate = await UserModel.findByPk(id)
    return res.json({ messageUpdate });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserModel.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: `Usuario ${SUCCESS.DELETED}`
    });
}

export { createUser, getAllUsers, getUserByName, updatePassword, deleteUser }