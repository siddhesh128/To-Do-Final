import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
