import { Request, Response } from "express";
import { TodoDTO } from "../schemas/Todo";

class TodoController {
  async add(req: Request, res: Response) {
    try {
      const { date, description, title }: TodoDTO = req.body;
      //Call service to add a todo

      //handle response
    } catch (err) {
      //Do something with the error
    }
  }
}

export default TodoController;
