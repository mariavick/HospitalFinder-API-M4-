import { HospitalModel } from "../models/Hospital.models.js";
import { HospitalService } from "../services/hospital.service.js";

const instanceServiceHospital = new HospitalService();

const createHospital = async (req, res) => {
    const { hospital_name, capacity} = req.body;
    const newHospital = await instanceServiceHospital
.createHospitalService(hospital_name, capacity);
    return res
        .status(201)
        .json({
            message: "Hospital criado com sucesso!",
            newHospital
    
        });
}
const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await instanceServiceHospital.getAllHospitalService();
        return res.json({ hospitals });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar os usuários" });
    }
}

const getHospitalByName = async (req, res) => {
    const { name } = req.body;
    const hospitalFindName = await HospitalModel.findOne({
        where: {
            hospital_name:name
        }
    });
    return res.json({ hospitalFindName });
}

const updateHospital = async (req, res) => {
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

    await HospitalModel.update({ password: newHospital }, {
        where: {
            id
        }
    });
}

const SUCCESS = {
    DELETED: "excluído com sucesso"
};

const deleteHospital = async (req, res) => {
    try {
        const { id } = req.params;
        await HospitalModel.destroy({
            where: {
                id
            }
        });
        return res.json({
            message: `Hospital ${SUCCESS.DELETED}`
        });
    } catch (error) {
        console.error("Erro ao excluir hospital:", error);
        return res.status(500).json({ error: "Erro ao excluir hospital" });
    }
}


//const deleteHospital = async (req, res) => {
//    const { id } = req.params;
//    await HospitalModel.destroy({
//        where: {
//            id
//        }
//    });
//    return res.json({
//        message: `Hospital ${SUCCESS.DELETED}`
//    });
//}

export { createHospital, getAllHospitals, getHospitalByName, updateHospital, deleteHospital }