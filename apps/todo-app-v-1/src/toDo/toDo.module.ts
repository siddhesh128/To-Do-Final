import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ToDoModuleBase } from "./base/toDo.module.base";
import { ToDoService } from "./toDo.service";
import { ToDoController } from "./toDo.controller";
import { ToDoResolver } from "./toDo.resolver";

@Module({
  imports: [ToDoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ToDoController],
  providers: [ToDoService, ToDoResolver],
  exports: [ToDoService],
})
export class ToDoModule {}
