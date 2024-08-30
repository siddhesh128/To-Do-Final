import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ElementModuleBase } from "./base/element.module.base";
import { ElementService } from "./element.service";
import { ElementController } from "./element.controller";
import { ElementResolver } from "./element.resolver";

@Module({
  imports: [ElementModuleBase, forwardRef(() => AuthModule)],
  controllers: [ElementController],
  providers: [ElementService, ElementResolver],
  exports: [ElementService],
})
export class ElementModule {}
