import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogLikeModel extends BaseModuleEntity<string> {
  LinkUserId?: number;
  LinkMemberUserId?: number;
  ModuleName: string;
  ModuleEntityName: string;
  ModuleEntityId: number;
  Likked: boolean;
  ExistBeforAndChangeNow: boolean;
}
