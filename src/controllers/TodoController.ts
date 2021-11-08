import { Request, Response } from "express";
import httpErrorFactory from "../errors/helpers/httpErrorFactory";
import { TodoDTO } from "../schemas/Todo";
import { userTodoService } from "../services/";
class TodoController {
  async add(req: Request, res: Response) {
    try {
      const payload: TodoDTO = req.body;

      const response = await userTodoService.addTodo(payload);

      return res.status(201).json(response);
    } catch (err: any) {
      return res
        .status(err?.type || 500)
        .json(httpErrorFactory(err?.type || 500, err?.message));
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { userID } = req.body;
      const response = await userTodoService.deleteTodo({ id, userID });

      return res.status(200).json(response);
    } catch (err: any) {
      return res
        .status(err?.type || 500)
        .json(httpErrorFactory(err?.type || 500, err?.message));
    }
  }
  async fetchAll(req: Request, res: Response) {
    try {
      const { userID } = req.body;
      const response = await userTodoService.fetchAll(userID);

      return res.status(200).json(response);
    } catch (err: any) {
      return res
        .status(err?.type || 500)
        .json(httpErrorFactory(err?.type || 500, err?.message));
    }
  }
}

export default TodoController;
