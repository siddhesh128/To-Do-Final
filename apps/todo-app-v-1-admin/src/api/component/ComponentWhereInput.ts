import { ElementListRelationFilter } from "../element/ElementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ComponentWhereInput = {
  elements?: ElementListRelationFilter;
  id?: StringFilter;
  page?: PageWhereUniqueInput;
};
