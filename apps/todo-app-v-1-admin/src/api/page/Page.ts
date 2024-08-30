import { Component } from "../component/Component";
import { Project } from "../project/Project";

export type Page = {
  components?: Array<Component>;
  createdAt: Date;
  id: string;
  project?: Project | null;
  updatedAt: Date;
};
