import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import httpErrorFactory from "../errors/helpers/httpErrorFactory";
export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];
  if (!authorization || !token) {
    return res.status(400).json(httpErrorFactory(400));
  }
  const secret = process.env.SECRET || " ";
  try {
    const decoded = jsonwebtoken.verify(
      token,
      secret
    ) as jsonwebtoken.JwtPayload;

    req.body = { ...req.body, userID: decoded?.userID };
    next();
  } catch (err) {
    return res.status(401).json(httpErrorFactory(401));
  }
}
