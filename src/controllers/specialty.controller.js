import { SpecialtyModel } from "../models/Specialty.models.js";
import { SpecialtyService } from "../services/specialty.service.js";

const instanceServiceSpecialty = new SpecialtyService();

const createSpecialty = async (req, res) => {
    const { specialty_name } = req.body;
    const newSpecialty = await instanceServiceSpecialty.createSpecialtyService(specialty_name);
    return res
        .status(201)
        .json({
            message: "Especialidade criada com sucesso!",
            newSpecialty
        });
}

const getAllSpecialtys = async (req, res) => {
    try {
        const specialty = await instanceServiceSpecialty.getAllSpecialtysService();
        return res.json({ specialty });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar as especialidades" });
    }
}

const getSpecialtyByName = async (req, res) => {
    const { name } = req.body;
    const SpecialtyFindName = await SpecialtyModel.findOne({
        where: {
            specialty_name:name
        }
    });
    return res.json({ SpecialtyFindName });
}

export { createSpecialty, getAllSpecialtys, getSpecialtyByName }