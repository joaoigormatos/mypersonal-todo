import userModel from "../database/model/UserModel";
import { UserDTO, UserLogin, UserSinginResponse } from "../schemas/User";
import { jwtGenerator } from "../util/jweGenerator";
import { v4 as uuid } from "uuid";

export default class UserService {
  async login(user: UserLogin) {
    try {
      const fetchedUser = await userModel.findOne({
        email: user.email,
        password: user.password,
      });
      if (!fetchedUser) {
        throw new Error("User not found");
      }
      const singinResponse: UserSinginResponse = {
        auth: true,
        token: jwtGenerator({ userID: fetchedUser?.id }),
      };
      return singinResponse;
    } catch (error) {
      console.error(error);
    }
  }

  async singup(userDTO: UserDTO) {
    try {
      const user = { ...userDTO, id: uuid() };
      //Validate if the user already exits
      await userModel.create(user);
      return true;
    } catch (e) {
      console.log(e);
      console.log("Error trying to create a user");
      throw e;
    }
  }
}
