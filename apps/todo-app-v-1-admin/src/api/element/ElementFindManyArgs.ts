import { ElementWhereInput } from "./ElementWhereInput";
import { ElementOrderByInput } from "./ElementOrderByInput";

export type ElementFindManyArgs = {
  where?: ElementWhereInput;
  orderBy?: Array<ElementOrderByInput>;
  skip?: number;
  take?: number;
};
