// criar um novo usuário
const createUser = async (req, res) => {
    const { name, age, cpf, number, insurance_id } = req.body;
    const newUser = await (name, age, cpf, number, insurance_id);
    return res
        .status(201)
        .json({
            message: "Usuário criado!",
            newUser
        });
};