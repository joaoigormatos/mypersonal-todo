import mongoose from "mongoose";
import { Todo } from "../../schemas/Todo";
import { UserType } from "../../schemas/User";

const { Schema } = mongoose;

const todoSchema = new Schema<Todo>({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  todos: {
    type: [todoSchema],
    required: true,
    default: [],
  },
});

const userModel = mongoose.model<UserType>("User", userSchema);

export default userModel;
