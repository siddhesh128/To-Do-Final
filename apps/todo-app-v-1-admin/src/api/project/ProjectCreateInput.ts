import { PageCreateNestedManyWithoutProjectsInput } from "./PageCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  pages?: PageCreateNestedManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
