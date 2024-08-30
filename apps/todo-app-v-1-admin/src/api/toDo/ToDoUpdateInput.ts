import { InputJsonValue } from "../../types";

export type ToDoUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  reminder?: Date | null;
  title?: string | null;
};
