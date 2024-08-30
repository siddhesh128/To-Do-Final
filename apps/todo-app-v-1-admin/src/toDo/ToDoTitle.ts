import { ToDo as TToDo } from "../api/toDo/ToDo";

export const TODO_TITLE_FIELD = "title";

export const ToDoTitle = (record: TToDo): string => {
  return record.title?.toString() || String(record.id);
};
