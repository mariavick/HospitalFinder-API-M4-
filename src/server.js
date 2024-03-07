import express from "express";
import {userRoute} from './routes/users.routes.js';
import {insuranceRoute} from './routes/insurance.routes.js';
import {doctorRoute} from './routes/doctors.routes.js';
import {hospitalRoute} from './routes/hospital.routes.js';
import {specialtyRoute } from "./routes/specialty.routes.js";
import cors from "cors";

export const app = express();
const port = 3636;

app.use(express.json());
app.use(cors());

app.use(userRoute);
app.use(hospitalRoute);
app.use(insuranceRoute);
app.use(doctorRoute);
app.use(specialtyRoute);

app.listen(port, async () => {
    console.log(`Servidor tá funcionando port ${port}`)
});