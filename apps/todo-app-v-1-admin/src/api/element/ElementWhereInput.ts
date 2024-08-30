import { ComponentWhereUniqueInput } from "../component/ComponentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ElementWhereInput = {
  component?: ComponentWhereUniqueInput;
  id?: StringFilter;
};
