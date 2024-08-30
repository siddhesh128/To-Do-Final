import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToDoServiceBase } from "./base/toDo.service.base";

@Injectable()
export class ToDoService extends ToDoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
