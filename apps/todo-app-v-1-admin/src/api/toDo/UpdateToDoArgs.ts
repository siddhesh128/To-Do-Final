import { ToDoWhereUniqueInput } from "./ToDoWhereUniqueInput";
import { ToDoUpdateInput } from "./ToDoUpdateInput";

export type UpdateToDoArgs = {
  where: ToDoWhereUniqueInput;
  data: ToDoUpdateInput;
};
