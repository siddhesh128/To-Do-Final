import { InputJsonValue } from "../../types";

export type ToDoCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  reminder?: Date | null;
  title?: string | null;
};
