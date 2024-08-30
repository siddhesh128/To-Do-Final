import { ElementCreateNestedManyWithoutComponentsInput } from "./ElementCreateNestedManyWithoutComponentsInput";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ComponentCreateInput = {
  elements?: ElementCreateNestedManyWithoutComponentsInput;
  page?: PageWhereUniqueInput | null;
};
