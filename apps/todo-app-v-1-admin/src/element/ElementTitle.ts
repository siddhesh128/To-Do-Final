import { Element as TElement } from "../api/element/Element";

export const ELEMENT_TITLE_FIELD = "id";

export const ElementTitle = (record: TElement): string => {
  return record.id?.toString() || String(record.id);
};
