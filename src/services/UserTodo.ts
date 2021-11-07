/* eslint-disable no-console */
import { TodoDTO } from "../schemas/Todo";
import userModel from "../database/model/UserModel";
import { v4 as uuid } from "uuid";

export default class UserTodoService {
  async addTodo(todoDTO: TodoDTO) {
    try {
      //Fetch the user model
      const user = await this.fetchUser(todoDTO.userId);
      //Check if the users exists
      if (!user) {
        //Throw custom error
        throw new Error("User does not exits");
      }
      user.todos.push({ ...todoDTO, id: uuid() });
      //Update the user Array with the todoDTO
      await userModel.updateOne({}, { todos: user.todos });
      //Update the user
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
    //Fetch the userId
    //If the user does not exist raise a 404 expection error
  }
  async fetchUser(userId: string) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await userModel.find({ id: userId });
    } catch (error) {
      throw error;
    }
  }
}
