import { ComponentCreateNestedManyWithoutPagesInput } from "./ComponentCreateNestedManyWithoutPagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PageCreateInput = {
  components?: ComponentCreateNestedManyWithoutPagesInput;
  project?: ProjectWhereUniqueInput | null;
};
