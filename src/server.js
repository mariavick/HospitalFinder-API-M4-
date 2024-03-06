import express from "express";
import {userRoute} from './routes/users.route.js';
import cors from "cors";

export const app = express();
const port = 3636;

app.use(express.json());
app.use(cors());
app.use(userRoute);

app.listen(port, async () => {
    console.log(`Servidor tá funcionando port ${port}`)
});