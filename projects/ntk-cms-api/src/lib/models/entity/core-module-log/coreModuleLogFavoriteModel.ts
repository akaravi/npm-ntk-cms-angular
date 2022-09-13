import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogFavoriteModel extends BaseModuleEntity<string> {
  linkUserId?: number;

  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
}
