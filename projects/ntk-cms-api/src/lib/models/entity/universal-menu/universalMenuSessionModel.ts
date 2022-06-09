import { BaseModuleEntity } from "../base/baseModuleEntity";

export class UniversalMenuSessionModel extends BaseModuleEntity<string>{
  userId: string;
  lastResponse: string;
  linkMenuItemId?: number;
  linkProcessId?: number;
}
