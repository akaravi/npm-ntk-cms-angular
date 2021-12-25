import { BaseModuleEntity } from "../base/baseModuleEntity";

export class UniversalMenuSessionModel extends BaseModuleEntity<string>{
  UserId: string;
  LastResponse: string;
  LinkMenuItemId?: number;
  LinkProcessId?: number;
}
