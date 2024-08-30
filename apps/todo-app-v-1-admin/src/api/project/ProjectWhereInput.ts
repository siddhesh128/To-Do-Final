import { StringFilter } from "../../util/StringFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  pages?: PageListRelationFilter;
  user?: UserWhereUniqueInput;
};
