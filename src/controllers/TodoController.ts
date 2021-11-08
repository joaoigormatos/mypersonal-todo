import { Request, Response } from "express";
import { TodoDTO } from "../schemas/Todo";
import { userTodoService } from "../services/";
class TodoController {
  async add(req: Request, res: Response) {
    try {
      const payload: TodoDTO = req.body;
      //Call service to add a todo
      await userTodoService.addTodo(payload);
      //handle response
    } catch (err) {
      //Do something with the error
    }
  }
}

export default TodoController;
