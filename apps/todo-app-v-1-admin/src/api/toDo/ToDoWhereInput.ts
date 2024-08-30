import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ToDoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  reminder?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
