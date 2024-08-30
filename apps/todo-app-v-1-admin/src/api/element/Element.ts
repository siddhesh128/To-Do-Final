import { Component } from "../component/Component";

export type Element = {
  component?: Component | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
