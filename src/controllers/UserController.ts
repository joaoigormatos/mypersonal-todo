import { Request, Response } from "express";
import httpErrorFactory from "../errors/helpers/httpErrorFactory";
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
    } catch (error: any) {
      return res
        .status(error?.type || 500)
        .json(httpErrorFactory(error?.type || 500, error?.message));
    }
  }
  async singup(req: Request, res: Response) {
    try {
      const { email, name, password }: UserDTO = req.body;

      await userService.singup({ email, name, password });
      return res.status(201).json({ message: "User created" });
    } catch (error: any) {
      return res
        .status(error?.type || 500)
        .json(httpErrorFactory(error?.type || 500, error?.message));
    }
  }
}
