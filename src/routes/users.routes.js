import { Router } from "express";
import { 
    createUser,
    getAllUsers,
    getUserByName,
    updatePassword,
    deleteUser
  } from "../controllers/users.controller.js";

const userRoute = Router();

userRoute.post("/new-user", createUser);

userRoute.get("/users", getAllUsers);

userRoute.get("/user-find-name", getUserByName);

userRoute.patch("/update-password/:id", updatePassword);

userRoute.delete("/delete-user/:id", deleteUser);

export { userRoute }