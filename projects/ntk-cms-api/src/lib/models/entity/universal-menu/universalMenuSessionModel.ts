import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
export class UniversalMenuSessionModel extends BaseModuleEntity<string>{
  userId: string;
  lastResponse: string;
  linkMenuItemId?: number;
  linkProcessId?: number;
}
