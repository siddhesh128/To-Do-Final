import { SortOrder } from "../../util/SortOrder";

export type ToDoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  reminder?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
