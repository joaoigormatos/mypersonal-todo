import express from "express";
import { todoController, userController } from "./controllers";
import authMiddleware from "./middlewares/auth";
const router = express.Router();

//User
router.post("/user/singin", userController.login);
router.post("/user/singup", userController.singup);

//Todo
router.post("/user/todo", authMiddleware, todoController.add);

export default router;
