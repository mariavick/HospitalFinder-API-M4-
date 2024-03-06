import { Router } from "express";
const userRoute = Router();

// criar um novo usuário
userRoute.post('/', (req, res) => {
  //const { name, age, cpf, number, insurance_id } = req.body;
  // Aqui você irá implementar a lógica para criar um novo usuário no banco de dados com as informações fornecidas no corpo da requisição
});

export { userRoute }