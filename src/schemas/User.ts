import { Todo } from "./Todo";

export type UserType = {
  id: string;
  email: string;
  password: string;
  name: string;
  todos: Todo[];
};
