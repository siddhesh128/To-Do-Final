import { PageUpdateManyWithoutProjectsInput } from "./PageUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  pages?: PageUpdateManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
