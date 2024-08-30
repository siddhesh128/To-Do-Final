import { JsonValue } from "type-fest";

export type ToDo = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  reminder: Date | null;
  title: string | null;
  updatedAt: Date;
};
