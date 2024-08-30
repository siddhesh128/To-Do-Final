import { ComponentListRelationFilter } from "../component/ComponentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PageWhereInput = {
  components?: ComponentListRelationFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
};
