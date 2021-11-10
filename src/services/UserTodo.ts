/* eslint-disable no-useless-catch */
/* eslint-disable no-console */
import { Todo, TodoDTO, TodoDTOOperation } from "../schemas/Todo";
import userModel from "../database/model/UserModel";
import { v4 as uuid } from "uuid";
import GeneralException from "../errors/GeneralError";
import { ExceptionType } from "../schemas/Errors";

export default class UserTodoService {
  async fetchOne(todoDTO: TodoDTOOperation) {
    try {
      //Fetch the user model
      const user = await this.fetchUser(todoDTO.userID);
      //Check if the users exists
      if (!user) {
        //Throw custom error
        throw new GeneralException(ExceptionType.NOT_FOUND, "User not found!!");
      }
      const fetchedTodo = user.todos.find((item) => item.id === todoDTO.id);

      if (!fetchedTodo) {
        throw new GeneralException(ExceptionType.NOT_FOUND, "Todo not found!!");
      }
      return fetchedTodo;
    } catch (error: any) {
      throw error;
    }
  }
  async fetchAll(userID: string, status?: string) {
    try {
      //Fetch the user model
      const user = await this.fetchUser(userID);
      //Check if the users exists
      if (!user) {
        //Throw custom error
        throw new GeneralException(ExceptionType.NOT_FOUND, "User not found!!");
      }

      return status
        ? user.todos.filter((item) => item.status === status)
        : user.todos;
    } catch (error: any) {
      throw error;
    }
  }
  async addTodo(todoDTO: TodoDTO) {
    try {
      //Fetch the user model
      const user = await this.fetchUser(todoDTO.userID);
      //Check if the users exists
      if (!user) {
        //Throw custom error
        throw new GeneralException(ExceptionType.NOT_FOUND, "User not found!!");
      }
      const todo = {
        ...todoDTO,
        id: uuid(),
      };
      //Update the user Array with the todoDTO
      user.todos.push(todo);
      //Update the user
      await userModel.updateOne({ id: todoDTO.userID }, { todos: user.todos });
      return todo;
    } catch (error: any) {
      throw error;
    }
  }

  async updateTodo(todoDTO: Todo) {
    try {
      //Fetch the user model
      const user = await this.fetchUser(todoDTO.userID);
      //Check if the users exists
      if (!user) {
        //Throw custom error
        throw new GeneralException(ExceptionType.NOT_FOUND, "User not found!!");
      }

      const fetchedTodo = user.todos.find((item) => item.id === todoDTO.id);

      if (!fetchedTodo) {
        throw new GeneralException(ExceptionType.NOT_FOUND, "Todo not found!!");
      }
      const todo = {
        ...todoDTO,
      };
      //Update the user Array with the todoDTO
      const position = user.todos.indexOf(fetchedTodo);
      console.log(todo);
      user.todos[position] = todo;
      //Update the user
      await userModel.updateOne({ id: todoDTO.userID }, { todos: user.todos });
      return todo;
    } catch (error: any) {
      throw error;
    }
  }
  async deleteTodo(todoDTO: TodoDTOOperation) {
    try {
      const user = await this.fetchUser(todoDTO.userID);
      if (!user) {
        throw new GeneralException(ExceptionType.NOT_FOUND, "User not found!!");
      }
      const fetchedTodo = user.todos.find((item) => item.id === todoDTO.id);

      if (!fetchedTodo) {
        throw new GeneralException(ExceptionType.NOT_FOUND, "Todo not found!!");
      }
      user.todos = user.todos.filter((item) => item.id !== todoDTO.id);

      await userModel.updateOne({ id: todoDTO.userID }, { todos: user.todos });
      return fetchedTodo;
    } catch (error: any) {
      throw error;
    }
  }
  private async fetchUser(userId: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await userModel.findOne({ id: userId });
    } catch (error) {
      throw error;
    }
  }
}
