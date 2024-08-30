import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ToDoService } from "./toDo.service";
import { ToDoControllerBase } from "./base/toDo.controller.base";

@swagger.ApiTags("toDos")
@common.Controller("toDos")
export class ToDoController extends ToDoControllerBase {
  constructor(
    protected readonly service: ToDoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
