import { ElementUpdateManyWithoutComponentsInput } from "./ElementUpdateManyWithoutComponentsInput";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ComponentUpdateInput = {
  elements?: ElementUpdateManyWithoutComponentsInput;
  page?: PageWhereUniqueInput | null;
};
