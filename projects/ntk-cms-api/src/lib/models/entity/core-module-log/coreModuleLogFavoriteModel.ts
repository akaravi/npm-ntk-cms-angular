import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogFavoriteModel extends BaseModuleEntity<string> {
  linkUserId?: number;
  linkMemberUserId?: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: number;
}
