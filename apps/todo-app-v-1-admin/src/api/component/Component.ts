import { Element } from "../element/Element";
import { Page } from "../page/Page";

export type Component = {
  createdAt: Date;
  elements?: Array<Element>;
  id: string;
  page?: Page | null;
  updatedAt: Date;
};
