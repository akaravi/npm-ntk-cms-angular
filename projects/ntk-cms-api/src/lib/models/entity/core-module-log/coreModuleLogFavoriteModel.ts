import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogFavoriteModel extends BaseModuleEntity<string> {
  LinkUserId?: number;
  LinkMemberUserId?: number;
  ModuleName: string;
  ModuleEntityName: string;
  ModuleEntityId: number;
}
