import { Request, Response } from "express";
import { UserDTO } from "../schemas/User";
import { userService } from "../services";

export default class UserController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      //you should fetch to see if the user exits
      const response = await userService.login({ email, password });

      return res.status(200).json(response);
      //if it does not should return 404 status code
      //if it does return the jwt code
    } catch (error) {
      console.error(error);
    }
  }
  async singup(req: Request, res: Response) {
    try {
      const { email, name, password }: UserDTO = req.body;

      await userService.singup({ email, name, password });
      return res.status(201).json({ message: "User created" });
    } catch (e) {
      console.log("Error trying to singup a user");
      return res
        .status(500)
        .json({ message: "Internal server error! Please try again later" });
    }
  }
}
