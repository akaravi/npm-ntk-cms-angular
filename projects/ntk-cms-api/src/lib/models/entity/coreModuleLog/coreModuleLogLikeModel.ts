import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogLikeModel extends BaseModuleEntity<string> {
  ModuleName: string;
  ModuleEntityName: string;
  LinkUserId?: number;
  LinkMemberUserId?: number;
  EntityId: number;
  Likked: boolean;
  ExistBeforAndChangeNow: boolean;
}
