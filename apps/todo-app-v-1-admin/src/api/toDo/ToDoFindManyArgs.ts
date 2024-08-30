import { ToDoWhereInput } from "./ToDoWhereInput";
import { ToDoOrderByInput } from "./ToDoOrderByInput";

export type ToDoFindManyArgs = {
  where?: ToDoWhereInput;
  orderBy?: Array<ToDoOrderByInput>;
  skip?: number;
  take?: number;
};
