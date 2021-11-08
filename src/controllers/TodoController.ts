import { Request, Response } from "express";
import { TodoDTO } from "../schemas/Todo";
import { userTodoService } from "../services/";
class TodoController {
  async add(req: Request, res: Response) {
    try {
      const payload: TodoDTO = req.body;

      const response = await userTodoService.addTodo(payload);

      return res.status(201).json(response);
    } catch (err: any) {
      return res.status(err?.type || 500).json(err?.type || 500);
    }
  }
}

export default TodoController;
