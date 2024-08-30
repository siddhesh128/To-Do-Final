import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElementServiceBase } from "./base/element.service.base";

@Injectable()
export class ElementService extends ElementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
