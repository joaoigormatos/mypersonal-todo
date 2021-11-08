import { Todo } from "./Todo";

export type UserType = {
  id: string;
  email: string;
  password: string;
  name: string;
  todos: Todo[];
};

export type UserDTO = {
  email: string;
  password: string;
  name: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export type UserSinginResponse = {
  auth: boolean;
  token: string;
};
