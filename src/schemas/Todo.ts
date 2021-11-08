export type TodoDTO = {
  title: string;
  description: string;
  date: Date;
  userID: string;
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  date: Date;
  userID: string;
  finished?: boolean;
};

export type TodoDTOOperation = {
  userID: string;
  id: string;
};
