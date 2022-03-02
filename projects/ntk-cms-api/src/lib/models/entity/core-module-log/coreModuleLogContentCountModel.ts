import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogContentCountModel extends BaseModuleEntity<string> {
  LinkUserId?: number;
  LinkMemberUserId?: number;
  ModuleName: string;
  ModuleEntityName: string;
  ModuleEntityId: number;
  RowCount: number;
}
