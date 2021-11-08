import jwt from "jsonwebtoken";

export function jwtGenerator(payload: any, expires = "15m") {
  const secret = process.env.SECRET || "";
  const token = jwt.sign(payload, secret, {
    expiresIn: expires,
  });
  return token;
}
