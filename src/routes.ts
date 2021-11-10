import express, { Request, Response } from "express";
import { todoController, userController } from "./controllers";
import authMiddleware from "./middlewares/auth";
const router = express.Router();

//User
router.post("/user/singin", userController.login);
router.post("/user/singup", userController.singup);

//Todo
router.post("/user/todo", authMiddleware, todoController.add);
router.delete("/user/todo/:id", authMiddleware, todoController.delete);
router.get("/user/todo/:id", authMiddleware, todoController.fetchOne);
router.get("/user/todo/", authMiddleware, todoController.fetchAll);

router.use("/", (_: Request, res: Response) => {
  res.status(200).json({
    welcome: "Welcome to mypersonal-todo API",
  });
});

export default router;
