import { InsuranceModel } from "../models/Insurance.models.js";
import { InsuranceService } from "../services/insurance.service.js";

const instanceServiceInsurance = new InsuranceService();

const createInsurance = async (req, res) => {
    const { insurance_name, type_services } = req.body;
    const newInsurance = await instanceServiceInsurance.createInsuranceService(insurance_name, type_services);
    return res
        .status(201)
        .json({
            message: "Convênio criado com sucesso!",
            newInsurance
        });
}

const getAllInsurances = async (req, res) => {
    try {
        const insurances = await instanceServiceInsurance.getAllInsuranceService();
        return res.json({ insurances });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao recuperar os convênios" });
    }
}

const getInsuranceByName = async (req, res) => {
    const { name } = req.body;
    const InsuranceFindName = await InsuranceModel.findOne({
        where: {
            insurance_name: name
        }
    });
    return res.json({ InsuranceFindName });
}

const updateInsurance = async (req, res) => {
    const { id } = req.params;
    const { newInsurance } = req.body;

    const insuranceAlreadyExist = await InsuranceModel.findOne({
        where: {
            id
        }
    });

    if (insuranceAlreadyExist) {
        return res.json({ message: `Convênio ${ERRORS.NOT_FOUND}` });
    }

    await InsuranceModel.update({ insurance: newInsurance }, {
        where: {
            id
        }
    });
    const messageUpdate = await InsuranceModel.findByPk(id)
    return res.json({ messageUpdate });
}

const deleteInsurance = async (req, res) => {
    const { id } = req.params;
    await InsuranceModel.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: `Convênio ${SUCCESS.DELETED}`
    });
}

export { createInsurance, getAllInsurances, getInsuranceByName, updateInsurance, deleteInsurance }