import { ComponentUpdateManyWithoutPagesInput } from "./ComponentUpdateManyWithoutPagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PageUpdateInput = {
  components?: ComponentUpdateManyWithoutPagesInput;
  project?: ProjectWhereUniqueInput | null;
};
