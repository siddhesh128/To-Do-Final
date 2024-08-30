import { ToDoWhereInput } from "./ToDoWhereInput";

export type ToDoListRelationFilter = {
  every?: ToDoWhereInput;
  some?: ToDoWhereInput;
  none?: ToDoWhereInput;
};
