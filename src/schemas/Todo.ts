export type TodoDTO = {
  title: string;
  description: string;
  date: Date;
  userID: string;
  status: "completed" | "progress";
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  date: Date;
  userID: string;
  status: "completed" | "progress";
};

export type TodoDTOOperation = {
  userID: string;
  id: string;
};
