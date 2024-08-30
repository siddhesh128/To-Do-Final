import { Page } from "../page/Page";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  pages?: Array<Page>;
  updatedAt: Date;
  user?: User | null;
};
