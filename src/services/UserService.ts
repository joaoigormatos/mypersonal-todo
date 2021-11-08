/* eslint-disable no-useless-catch */
import userModel from "../database/model/UserModel";
import { UserDTO, UserLogin, UserSinginResponse } from "../schemas/User";
import { jwtGenerator } from "../util/jweGenerator";
import { v4 as uuid } from "uuid";
import GeneralException from "../errors/GeneralError";
import { ExceptionType } from "../schemas/Errors";

export default class UserService {
  async login(user: UserLogin) {
    try {
      const fetchedUser = await userModel.findOne({
        email: user.email,
        password: user.password,
      });
      if (!fetchedUser) {
        throw new GeneralException(ExceptionType.NOT_FOUND, "Todo not found!!");
      }
      const singinResponse: UserSinginResponse = {
        auth: true,
        token: jwtGenerator({ userID: fetchedUser?.id }),
      };
      return singinResponse;
    } catch (error) {
      throw error;
    }
  }

  async singup(userDTO: UserDTO) {
    try {
      const user = { ...userDTO, id: uuid() };
      //Validate if the user already exits
      await userModel.create(user);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
