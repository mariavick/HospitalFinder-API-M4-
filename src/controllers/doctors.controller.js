import { DoctorModel } from "../models/Doctor.models.js";
import { DoctorService } from "../services/doctor.service.js";

const instanceServiceDoctor = new DoctorService();

const createDoctor = async (req, res) => {
    const { doctor_name, crm, id_hospital, id_specialty } = req.body;
    const newDoctor = await instanceServiceDoctor.createDoctorService(doctor_name, crm, id_hospital, id_specialty);
    return res
        .status(201)
        .json({
            message: "Médico criado com sucesso!",
            newDoctor
        });
}

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await instanceServiceDoctor.getAllDoctorService();
        return res.json({ doctors });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar os médicos" });
    }
}

const getDoctorByName = async (req, res) => {
    const { name } = req.body;
    const DoctorFindName = await DoctorModel.findOne({
        where: {
            name
        }
    });
    return res.json({ DoctorFindName });
}

const updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { newDoctor } = req.body;

    const doctorAlreadyExist = await DoctorModel.findOne({
        where: {
            id
        }
    });

    if (doctorAlreadyExist) {
        return res.json({ message: `Medicos ${ERRORS.NOT_FOUND}` });
    }

    await DoctorModel.update({ doctor: newDoctor }, {
        where: {
            id
        }
    });
    const messageUpdate = await DoctorModel.findByPk(id)
    return res.json({ messageUpdate });
}

const deleteDoctor = async (req, res) => {
    const { id } = req.params;
    await DoctorModel.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: `Medicos ${SUCCESS.DELETED}`
    });
}

export { createDoctor, getAllDoctors, getDoctorByName, updateDoctor, deleteDoctor }